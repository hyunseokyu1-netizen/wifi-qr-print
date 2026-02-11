import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const wifiConfigs = pgTable("wifi_configs", {
  id: serial("id").primaryKey(),
  ssid: text("ssid").notNull(),
  encryption: text("encryption").notNull().default("WPA"), // WPA, WEP, nopass
  hidden: boolean("hidden").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertWifiConfigSchema = createInsertSchema(wifiConfigs).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  password: z.string().optional(), // We won't store this in DB for security, but validation needs it
});

export type WifiConfig = typeof wifiConfigs.$inferSelect;
export type InsertWifiConfig = z.infer<typeof insertWifiConfigSchema>;
