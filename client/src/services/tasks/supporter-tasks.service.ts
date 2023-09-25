import { DbResult } from "../../database/supabase.types";
import { supabase } from "../../supabase";
import _ from "lodash";

export class SupporterTasksService  {
  constructor(){}

  async getAcceptedTasksByCommunityId(communityId: string, supporterId: string): Promise<DbResult<any>> {
    const {data, error} = await supabase.from("tasks").select("*").eq("community_id", communityId).eq("accepted_by", supporterId);
    return {data, error};
  }
  async getAssignedTasksByCommunityId(communityId: string, supporterId: string): Promise<DbResult<any>> {
    const {data, error} = await supabase.from("tasks").select(`
      *,
      users(
        ${supporterId}
      )
    `).eq("community_id", communityId);
    return {data, error};
  }
}
