function toKebabCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(" ", "-")
}

module.exports = toKebabCase;