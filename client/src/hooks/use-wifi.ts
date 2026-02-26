import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertWifiConfig } from "@shared/schema";

export function useWifiConfigs() {
  return useQuery({
    queryKey: [api.wifi.list.path],
    queryFn: async () => {
      const res = await fetch(api.wifi.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch history");
      return api.wifi.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateWifiConfig() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertWifiConfig) => {
      const res = await fetch(api.wifi.create.path, {
        method: api.wifi.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.wifi.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to save config");
      }
      return api.wifi.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.wifi.list.path] });
    },
  });
}
