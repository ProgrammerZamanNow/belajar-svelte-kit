// import {redirect} from "@sveltejs/kit";
//
// export async function load({cookies, url}) {
//   const user = url.searchParams.get("user");
//   if (user) {
//     cookies.set("user", user, {path: "/"})
//     redirect(303, "/users/dashboard")
//   }
//
//   if (cookies.get("user")) {
//     redirect(303, "/users/dashboard")
//   }
//
//   return {}
// }