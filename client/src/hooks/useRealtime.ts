import { useEffect } from "react";
import { supabase } from "../supabase";
import { Database } from "../types/database.types";
import { REALTIME_POSTGRES_CHANGES_LISTEN_EVENT } from "@supabase/supabase-js";
import { Payload, Table } from "../types/realtime.types";

type RealtimeUpdate<T extends Table> = (payload: Payload<T>) => void;

export const useRealtime = <T extends Table>(
  table: T,
  realtimeCallback: RealtimeUpdate<T>
) => {
  useEffect(() => {
    const channel = supabase
      .channel(`${table}_changes`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table,
        },
        (payload: any) => realtimeCallback(payload)
      )
      .subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);
};
