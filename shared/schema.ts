import { z } from "zod";

export const insertWifiConfigSchema = z.object({
  ssid: z.string().min(1, "SSID is required"),
  encryption: z.enum(["WPA", "WEP", "nopass"]).default("WPA"),
  password: z.string().optional(),
  hidden: z.boolean().default(false),
});

export type InsertWifiConfig = z.infer<typeof insertWifiConfigSchema>;
