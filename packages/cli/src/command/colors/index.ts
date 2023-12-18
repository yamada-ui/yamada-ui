import * as p from "@clack/prompts"
import c from "chalk"
import { toHex, lighten } from "color2k"
import { prettier } from "../../utils"

export const toneColor = (
  color: string,
  hue: number,
  lCoef: number,
  dCoef: number,
) => {
  const coef = hue < 500 ? lCoef : dCoef

  const amount = (500 - hue) * 0.001 * coef

  return toHex(lighten(color, amount))
}

const hues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

type Options = {
  name?: string
  coef?: string
  out?: boolean
}

export const actionColors = async (
  color: string,
  { name, coef, out }: Options,
) => {
  p.intro(c.magenta(`Generating Hue colors`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Computing the color`)

    const [lCoef, dCoef] = coef?.split(",").map((v) => Number(v.trim())) ?? [
      0.94, 0.86,
    ]

    const contents = hues.reduce<Record<string, any>>((prev, hue) => {
      prev[hue] = toneColor(color, hue, lCoef, dCoef)

      return prev
    }, {})

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
