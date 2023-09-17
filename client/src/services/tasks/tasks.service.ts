import { DbResult } from "../../database/supabase.types";
import { supabase } from "../../supabase";
import _ from "lodash";

export class TasksService  {
  constructor(){}
  

  async getAllTasksByCommunityId(communityId: string): Promise<DbResult<any>> {
    const {data, error} = await supabase.from("tasks").select("*").filter("community_id", "eq", communityId)
    return {data, error};
  }
}
