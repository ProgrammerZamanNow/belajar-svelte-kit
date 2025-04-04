import {PUBLIC_NAME} from "$env/static/public";
import {env} from "$env/dynamic/private";
import {env as publicEnv} from "$env/dynamic/public";
import {connect} from "$lib/server/database.js";

export async function handle({event, resolve}) {

  console.log(`receive request : ${event.url.href}`);

  return await resolve(event);
}

export function init(){
  console.log("init application");
  connect();
  console.log(PUBLIC_NAME);

  console.log(env.HELLO);
  console.log(publicEnv.PUBLIC_HELLO);
}