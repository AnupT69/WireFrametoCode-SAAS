import { integer, json, pgTable, varchar } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: integer().default(0),
});

export const WireframeToCodeTable = pgTable("wireFrameToCode", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  udi: varchar().notNull(),
  imageUrl: varchar(),
  model: varchar(),
  description: varchar(),
  code: json(),
  createdBy: varchar(),
});
