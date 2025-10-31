import { drizzle } from "drizzle-orm/node-postgres";
import * as postgres from "postgres";
import * as schema from "./schema";

const client = postgres(process.env.DATABASE_URL as string);

export const db = drizzle(client, { schema , logger: true});