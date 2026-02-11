import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.wifi.list.path, async (req, res) => {
    const configs = await storage.getRecentConfigs();
    res.json(configs);
  });

  app.post(api.wifi.create.path, async (req, res) => {
    try {
      const input = api.wifi.create.input.parse(req.body);
      // Password is in 'input' but storage.createConfig strips it before saving
      const config = await storage.createConfig(input);
      res.status(201).json(config);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
