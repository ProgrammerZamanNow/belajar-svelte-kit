import {json} from "@sveltejs/kit";

export async function GET({cookies}) {
  if (cookies.get("user")) {
    return json({
      user: cookies.get("user")
    }, {
      status: 200
    })
  } else {
    return json({
      user: null
    }, {
      status: 401
    })
  }
}

export async function DELETE({cookies}) {
  cookies.delete("user", {path: "/"})

  return json({
    user: null
  }, {
    status: 200
  })
}