import {redirect} from "@sveltejs/kit";

export function load({cookies}) {
  const user = cookies.get("user")
  if (!user) {
    redirect(
      303,
      "/users/login"
    )
  }

  return {
    user: user
  }
}