import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as OneSignal from 'https://esm.sh/@onesignal/node-onesignal@1.0.0-beta7';
import { Database } from "../../types/supabase.ts";

const _OnesignalAppId_ = Deno.env.get('ONESIGNAL_APP_ID')!
const _OnesignalUserAuthKey_ = Deno.env.get('USER_AUTH_KEY')!
const _OnesignalRestApiKey_ = Deno.env.get('ONESIGNAL_REST_API_KEY')!
const configuration = OneSignal.createConfiguration({
  userKey: _OnesignalUserAuthKey_,
  appKey: _OnesignalRestApiKey_,
})

const onesignal = new OneSignal.DefaultApi(configuration);

serve(async (req) => {
  try {
    const record: Database['public']['Tables']['tasks']['Row'] = (await req.json()).record;
    const notification = new OneSignal.Notification()
    notification.app_id = _OnesignalAppId_
    notification.include_external_user_ids = [record.accepted_by as string];
    notification.contents = {
      en: `New task has been created: ${record.title}!`,
    }
    const onesignalApiRes = await onesignal.createNotification(notification);

    return new Response(JSON.stringify({ onesignalResponse: onesignalApiRes }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Failed to create OneSignal notification', err)
    return new Response('Server error.', {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})