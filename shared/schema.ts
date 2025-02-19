import { pgTable, text, serial, integer, boolean, numeric } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
});

export const serverStatus = pgTable("server_status", {
  id: serial("id").primaryKey(),
  ip: text("ip").notNull(),
  players: integer("players").notNull(),
  maxPlayers: integer("max_players").notNull(),
  status: text("status").notNull(),
});

export const insertProductSchema = createInsertSchema(products);
export const insertServerStatusSchema = createInsertSchema(serverStatus);

export type Product = typeof products.$inferSelect;
export type ServerStatus = typeof serverStatus.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertServerStatus = z.infer<typeof insertServerStatusSchema>;
