import * as p from "@clack/prompts"
import c from "chalk"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const actionMigrate = async () => {
  p.intro(c.magenta(`Migrating...`))

  try {
    await sleep(3000)
  } catch (e) {
    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}
