import { inspect } from "util"

export function printExample(data) {
  const example = {}

  Object.values(data).forEach(a => {
    Object.assign(example, a)
  })

  console.log("\nEXAMPLE:")
  console.log("/**")
  console.log(" * @example")
  console.log(" * ```")
  console.log(" * {")

  const comment: string[] = []

  Object.keys(example).forEach(key => {
    const lines = inspect(example[key], false, 10).split("\n")

    if (lines.length === 1) {
      comment.push(key + ": " + lines + ",")
    } else {
      lines.forEach((line, index) => {
        if (index === 0) {
          comment.push(key + ": " + line)
        } else if (index === lines.length - 1) {
          comment.push(line + ",")
        } else {
          comment.push(line)
        }
      })
    }
  })
  comment.forEach(line => {
    console.log(" *   " + line)
  })

  console.log(" * ```")
  console.log(" * }")
  console.log(" */")
}
