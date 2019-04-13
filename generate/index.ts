import { download } from "./download"
import { printExample } from "./example"
import { printShape } from "./shape"

async function deriveTypes(resource: string) {
  const data = await download(resource)
  printExample(data)
  printShape(data)
}

async function generate() {
  await deriveTypes("/game/advisors")
  // await deriveTypes("/game/blueprints")
  // await deriveTypes("/game/designs")
  // await deriveTypes("/game/econquests")
  // await deriveTypes("/game/languages")
  // await deriveTypes("/game/lootrolls")
  await deriveTypes("/game/materials")
  await deriveTypes("/game/traits")
  await deriveTypes("/game/protodata")
  // await deriveTypes("leaderboards/crete_solo")
  // await deriveTypes("leaderboards/halloween")
  // await deriveTypes("leaderboards/sparta_1v1")
  // await deriveTypes("leaderboards/winter")
  // await deriveTypes("/marketplace")
  // await deriveTypes("/stores")
  // await deriveTypes("/users/n4bb12/profile")
  // await deriveTypes("/users/online")
  // await deriveTypes("/users/registered")
}

generate().catch(console.error)
