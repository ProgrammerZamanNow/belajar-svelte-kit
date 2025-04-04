import {DB_HOST, DB_PORT} from "$env/static/private";
import {PUBLIC_NAME} from "$env/static/public";
import {env} from "$env/dynamic/private";
import {env as publicEnv} from "$env/dynamic/public";

export async function handle({event, resolve}) {

  console.log(`receive request : ${event.url.href}`);

  return await resolve(event);
}

export function init(){
  console.log("init application");
  console.log(DB_HOST);
  console.log(DB_PORT);
  console.log(PUBLIC_NAME);

  console.log(env.HELLO);
  console.log(publicEnv.PUBLIC_HELLO);
}