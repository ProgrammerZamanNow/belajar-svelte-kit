import {fail} from "@sveltejs/kit";

let lastId = 0;
let todos = [];

export async function load() {
  return {
    todos: todos
  }
}

export const actions = {
  add: async ({request}) => {
    const data = await request.formData();
    const todo = data.get("todo");

    if (todo.trim() === "") {
      return fail(400, {
        error: true,
        message: "Todo can not be empty"
      })
    }

    todos.push({
      id: lastId++,
      name: todo
    })
  },

  delete: async ({request}) => {
    const data = await request.formData();
    const id = data.get("id");
    todos = todos.filter(item => item.id !== Number(id))
  }
}