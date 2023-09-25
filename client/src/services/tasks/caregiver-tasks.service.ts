import { DbResult } from "../../database/supabase.types";
import { supabase } from "../../supabase";
import _ from "lodash";

export class SupporterTasksService  {
  constructor(){}
  
  async getAllTasksByCommunityId(communityId: string): Promise<DbResult<any>> {
    const {data, error} = await supabase.from("tasks").select("*").eq("community_id", communityId);
    return {data, error};
  }
}
