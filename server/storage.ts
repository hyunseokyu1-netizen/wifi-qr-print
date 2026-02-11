import { db } from "./db";
import { wifiConfigs, type WifiConfig, type InsertWifiConfig } from "@shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  getRecentConfigs(): Promise<WifiConfig[]>;
  createConfig(config: InsertWifiConfig): Promise<WifiConfig>;
}

export class DatabaseStorage implements IStorage {
  async getRecentConfigs(): Promise<WifiConfig[]> {
    return await db.select()
      .from(wifiConfigs)
      .orderBy(desc(wifiConfigs.createdAt))
      .limit(10);
  }

  async createConfig(insertConfig: InsertWifiConfig): Promise<WifiConfig> {
    // Explicitly destructure to ensure we NEVER store the password
    // even if the type definition somehow allowed it.
    // The DB schema doesn't have a password column, but this is double safety.
    const { password, ...safeConfig } = insertConfig;
    
    const [config] = await db.insert(wifiConfigs)
      .values(safeConfig)
      .returning();
      
    return config;
  }
}

export const storage = new DatabaseStorage();
