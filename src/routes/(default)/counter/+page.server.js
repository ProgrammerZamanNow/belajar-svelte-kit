import {connect} from "$lib/server/database.js";
import {building} from "$app/environment";

if (!building) {
  connect();
}

export async function load() {
  return {
    counter: 1
  }
}