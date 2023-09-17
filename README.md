# DoCare

## Requirements
if you want to work on the edge functions make sure you have:
- Supabase CLI: https://github.com/supabase/cli <br>
- Deno: https://deno.com/ <br>

## Starting the client

Start the client<br>
`$ cd client`<br>
`$ npm i`<br>
`$ npm  start`<br>

Next you will need to create a .env file:<br>
`SUPABASE_URL=<SOME-URL-VALUE>`<br>
`SUPABASE_PUBLIC_ANNO_KEY=<SOME-ANNO-VALUE>`<br>

Create a root .env if you develop the edge functions locally:<br>
`ONESIGNAL_APP_ID=YOUR_ONESIGNAL_APP_ID`<br>
`USER_AUTH_KEY=YOUR_USER_AUTH_KEY`<br>
`ONESIGNAL_REST_API_KEY=YOUR_ONESIGNAL_REST_API_KEY`<br>
