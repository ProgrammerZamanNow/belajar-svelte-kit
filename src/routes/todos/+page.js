export async function load({data}) {
  return {
    todos: [
      "From Client",
      ...data.todos
    ]
  }
}