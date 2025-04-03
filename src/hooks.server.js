export async function handle({event, resolve}) {

  console.log(`receive request : ${event.url.href}`);

  return await resolve(event);
}

export function init(){
  console.log("init application");
}