// import {redirect} from "@sveltejs/kit";
//
// export async function load({cookies, url}) {
//
//   // logout
//   if (url.searchParams.get("logout")) {
//     cookies.delete("user", {path: "/"})
//     redirect(303, "/users/login")
//   }
//
//   // cookies not exists
//   if (!cookies.get("user")) {
//     redirect(303, "/users/login")
//   }
//
//   return {
//     user: cookies.get("user")
//   }
// }