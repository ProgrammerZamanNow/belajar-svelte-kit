export async function load({params, fetch}) {
  const response = await fetch(`/api/products/${params.id}.json`)
  return await response.json()
}