export function match(lang) {
  const value = lang || "id";
  return ["en", "id", "fn"].includes(value);
}