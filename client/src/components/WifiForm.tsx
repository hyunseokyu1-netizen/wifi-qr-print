import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertWifiConfigSchema, type InsertWifiConfig } from "@shared/schema";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Printer, RotateCcw, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

interface WifiFormProps {
  onUpdate: (config: InsertWifiConfig) => void;
  currentConfig: InsertWifiConfig;
}

export function WifiForm({ onUpdate, currentConfig }: WifiFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useI18n();

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

  const handleChange = (data: Partial<InsertWifiConfig>) => {
    const currentValues = form.getValues();
    const newConfig = { ...currentValues, ...data };
    onUpdate(newConfig);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Form {...form}>
      <form
        onChange={() => handleChange(form.getValues())}
        onSubmit={(e) => e.preventDefault()}
        className="space-y-6"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="ssid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.ssid")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.ssidPlaceholder")}
                    className="h-12 bg-background border-2 focus:ring-4 focus:ring-primary/10 transition-all"
                    data-testid="input-ssid"
                    title={t("form.ssidTooltip")}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <span>⚠</span> {t("form.ssidTooltip")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="encryption"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.encryption")}</FormLabel>
                <Select
                  onValueChange={(val) => {
                    field.onChange(val);
                    handleChange({ encryption: val });
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12 bg-background border-2" data-testid="select-encryption">
                      <SelectValue placeholder={t("form.encryptionPlaceholder")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="WPA" data-testid="option-wpa">{t("form.encryptionWPA")}</SelectItem>
                    <SelectItem value="WEP" data-testid="option-wep">{t("form.encryptionWEP")}</SelectItem>
                    <SelectItem value="nopass" data-testid="option-nopass">{t("form.encryptionNone")}</SelectItem>
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
                  <FormLabel>{t("form.password")}</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder={t("form.passwordPlaceholder")}
                        className="h-12 bg-background border-2 pr-10"
                        data-testid="input-password"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      data-testid="button-toggle-password"
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
                    data-testid="checkbox-hidden"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{t("form.hidden")}</FormLabel>
                  <FormDescription>
                    {t("form.hiddenDesc")}
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
            onClick={() => {
              form.reset({ ssid: "", password: "", encryption: "WPA", hidden: false });
              onUpdate({ ssid: "", password: "", encryption: "WPA", hidden: false });
            }}
            data-testid="button-reset"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            {t("form.reset")}
          </Button>

          <Button
            type="button"
            size="lg"
            className="flex-[2] h-14 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            onClick={handlePrint}
            disabled={!form.watch("ssid")}
            data-testid="button-print"
          >
            <Printer className="w-5 h-5 mr-2" />
            {t("form.print")}
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground bg-muted/50 rounded-lg px-3 py-2 border border-border/50" data-testid="text-print-tip">
          💡 {t("form.printTip")}
        </p>
      </form>
    </Form>
  );
}
