import * as p from "@clack/prompts"
import c from "chalk"
import { parseToHsla, hsla, toHex } from "color2k"
import { prettier } from "../../utils"

const tones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const generateTones = (hex: string) => {
  let [h, s, l] = parseToHsla(hex)

  l *= 100

  const d = l <= 50
  const x = ((!d ? 100 : 95) - l) / 5
  const y = (l - (d ? 5 : 15)) / 5

  return tones.reduce(
    (prev, tone) => {
      const t = tone / 100
      let z: number

      if (t <= 5) {
        z = l + (5 - t) * x
      } else {
        z = l - (t - 5) * y
      }

      z /= 100

      prev[tone] = toHex(hsla(h, s, z, 1))

      return prev
    },
    {} as Record<string, any>,
  )
}

type Options = {
  name?: string
  out?: boolean
}

export const actionColors = async (color: string, { name, out }: Options) => {
  p.intro(c.magenta(`Generating Hue colors`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Computing the color`)

    const contents = generateTones(color)

    let result = contents

    if (name) result = { [name]: result }

    let data = await prettier(JSON.stringify(result), { parser: "json" })

    if (name)
      data = data.replace(/^{/, "").replace(/}\s+$/, "").replace(/\s+}/g, "\n}")

    s.stop(`Computed the color`)

    p.note(
      Object.entries(contents)
        .map(
          ([hue, color]) => `- ${hue.length === 2 ? " " : ""}${hue}: ${color}`,
        )
        .join("\n"),
      "Generated the colors",
    )

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s${!out ? "\n" : ""}`))

    if (out) console.log(data.trim(), "\n")
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}
