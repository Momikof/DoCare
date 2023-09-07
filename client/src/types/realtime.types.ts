import { REALTIME_POSTGRES_CHANGES_LISTEN_EVENT } from "@supabase/supabase-js";
import { Database } from "./database.types";

type TableSchema<T extends Table> = Database["public"]["Tables"][T];
export type Table = keyof Database["public"]["Tables"];
export type Payload<T extends Table> = {
    commit_timestamp: string;
    errors?: any[];
    eventType: REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
    new: TableSchema<T>['Row'];
    old: Partial<TableSchema<T>['Row']>;
    schema: "public";
    table: T;
}