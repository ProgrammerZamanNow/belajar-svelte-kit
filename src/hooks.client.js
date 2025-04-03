export function init() {
  console.log("init client");
}

export async function handleError(params) {
  console.error(`Ups`, params);
}