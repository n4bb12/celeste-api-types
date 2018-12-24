import axios from "axios"
import chalk from "chalk"
import filenamify from "filenamify"
import { mkdirp, pathExists, readJson, writeFile } from "fs-extra"
import { dirname } from "path"

export async function download(resource: string): Promise<any> {
  const url = "https://api.projectceleste.com" + resource

  const filename = "download-cache/" + url
    .replace(/\\/g, "/")
    .replace("https://", "")
    .split("/")
    .map(segment => filenamify(segment))
    .join("/")

  if (await pathExists(filename)) {
    return (await readJson(filename)).data
  }

  console.log(chalk.gray("Download " + url))
  const config = {
    url,
    method: "get",
    headers: { Accept: "application/json" },
  }
  const response = await axios.request(config)

  await mkdirp(dirname(filename))
  await writeFile(filename, JSON.stringify(response.data, null, 2))

  return response.data.data
}
