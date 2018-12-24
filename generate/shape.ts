import { inspect } from "util"

export function printShape(data) {
  const shape = {}
  const keycount = {}
  const length = Object.values(data).length

  Object.values(data).forEach(obj => {
    Object.keys(obj).forEach(key => {
      shape[key] = shape[key] || {}
      shape[key][obj[key]] = obj[key]

      keycount[key] = keycount[key] || 0
      keycount[key]++
    })
  })

  Object.keys(shape).forEach(key => {
    const values = Object.values(shape[key])
    const prefix = "  " + key + (keycount[key] < length ? "?" : "") + ": "

    if (values.length < 50) {
      shape[key] = prefix + values.map(value => inspect(value, false, 10)).join(" | ")
    } else {
      shape[key] = prefix + typeof values[0]
    }
  })

  console.log("\nSHAPE:")
  Object.values(shape).forEach(line => console.log(line))

  console.log("\nOPTIONAL:")
  Object.keys(keycount).forEach(key => {
    if (keycount[key] < length) {
      const percent = ((length - keycount[key]) / length * 100).toFixed(2)
      console.log(`  ${key}: ${percent}%`)
    }
  })
}
