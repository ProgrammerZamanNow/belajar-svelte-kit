import {PUBLIC_HELLO, PUBLIC_NAME} from "$env/static/public";
import {connect} from "$lib/server/database.js";
import {HELLO} from "$env/static/private";

export async function handle({event, resolve}) {

  console.log(`receive request : ${event.url.href}`);

  return await resolve(event);
}

export function init(){
  console.log("init application");
  connect();
  console.log(PUBLIC_NAME);

  console.log(HELLO);
  console.log(PUBLIC_HELLO);
}