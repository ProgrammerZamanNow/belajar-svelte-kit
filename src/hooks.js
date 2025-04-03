export async function reroute({url}) {
  if (url.pathname === "/home") {
    return "/id/home";
  }
}