import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertWifiConfigSchema, type InsertWifiConfig } from "@shared/schema";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Printer, RotateCcw, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useCreateWifiConfig } from "@/hooks/use-wifi";
import { useToast } from "@/hooks/use-toast";

interface WifiFormProps {
  onUpdate: (config: InsertWifiConfig) => void;
  currentConfig: InsertWifiConfig;
}

export function WifiForm({ onUpdate, currentConfig }: WifiFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const createMutation = useCreateWifiConfig();

  const form = useForm<InsertWifiConfig>({
    resolver: zodResolver(insertWifiConfigSchema),
    defaultValues: {
      ssid: "",
      password: "",
      encryption: "WPA",
      hidden: false,
    },
    mode: "onChange",
  });

  // Sync form changes to parent state for real-time preview
  const handleChange = (data: Partial<InsertWifiConfig>) => {
    // Merge current values with changes
    const currentValues = form.getValues();
    const newConfig = { ...currentValues, ...data };
    
    // Validate minimally before updating preview if possible, but for preview strictly just pass data
    // We only trigger validation on submit usually, but let's just pass data up
    onUpdate(newConfig);
  };

  const onSubmit = async (data: InsertWifiConfig) => {
    try {
      await createMutation.mutateAsync(data);
      // We don't clear the form because user might want to print it
      toast({
        title: "기록에 저장됨",
        description: "네트워크 설정이 안전하게 저장되었습니다.",
      });
    } catch (error) {
      toast({
        title: "오류",
        description: error instanceof Error ? error.message : "저장 실패",
        variant: "destructive",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Form {...form}>
      <form 
        onChange={() => handleChange(form.getValues())}
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="ssid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>네트워크 이름 (SSID)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="예: My_Home_WiFi" 
                    className="h-12 bg-background border-2 focus:ring-4 focus:ring-primary/10 transition-all" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="encryption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>보안 방식</FormLabel>
                <Select 
                  onValueChange={(val) => {
                    field.onChange(val);
                    handleChange({ encryption: val });
                  }} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12 bg-background border-2">
                      <SelectValue placeholder="보안 방식을 선택하세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="WPA">WPA / WPA2 / WPA3</SelectItem>
                    <SelectItem value="WEP">WEP</SelectItem>
                    <SelectItem value="nopass">없음 (공개 네트워크)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.watch("encryption") !== "nopass" && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="네트워크 비밀번호를 입력하세요"
                        className="h-12 bg-background border-2 pr-10"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="hidden"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border-2 p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                      handleChange({ hidden: checked as boolean });
                    }}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>숨겨진 네트워크</FormLabel>
                  <FormDescription>
                    SSID를 브로드캐스트하지 않는 네트워크인 경우 선택하세요.
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button 
            type="button" 
            variant="outline" 
            size="lg" 
            className="flex-1 h-14 text-base font-semibold border-2 hover:bg-secondary/50"
            onClick={() => form.reset({ ssid: "", password: "", encryption: "WPA", hidden: false })}
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            초기화
          </Button>

          <Button 
            type="button" 
            variant="secondary" 
            size="lg" 
            className="flex-1 h-14 text-base font-semibold bg-indigo-50 text-primary hover:bg-indigo-100 hover:text-indigo-700"
            onClick={handlePrint}
            disabled={!form.watch("ssid")}
          >
            <Printer className="w-5 h-5 mr-2" />
            인쇄하기
          </Button>

          <Button 
            type="submit" 
            size="lg" 
            className="flex-[2] h-14 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            disabled={createMutation.isPending || !form.watch("ssid")}
          >
            {createMutation.isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                저장 중...
              </>
            ) : (
              "생성 기록 저장"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
