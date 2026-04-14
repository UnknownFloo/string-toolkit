function toSnakeCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(" ", "_")
}

module.exports = toSnakeCase;