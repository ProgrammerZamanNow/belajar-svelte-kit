export async function load({params}) {
  const lang = params.lang;

  const hello = {
    "en": "Hello",
    "id": "Halo",
    "fn": "Hola"
  }

  return {
    hello: hello[lang]
  }
}