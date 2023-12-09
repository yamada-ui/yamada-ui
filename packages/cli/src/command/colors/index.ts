import { toHex, lighten } from "color2k"
import ora from "ora"
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
}

export const actionColors = async (color: string, { name, coef }: Options) => {
  const spinner = ora("Generating Hue colors").start()

  try {
    const start = process.hrtime.bigint()

    const [lCoef, dCoef] = coef?.split(",").map((v) => Number(v.trim())) ?? [
      0.94, 0.86,
    ]

    let result = hues.reduce<Record<string, any>>((prev, hue) => {
      prev[hue] = toneColor(color, hue, lCoef, dCoef)

      return prev
    }, {})

    if (name) {
      result = { [name]: result }
    }

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    spinner.succeed(`Done in ${duration}s\n`)

    let data = await prettier(JSON.stringify(result), { parser: "json" })

    if (name) {
      data = data
        .replace(/^{/, "")
        .replace(/}\s+$/, "")
        .replace(/\s+}/g, "\n}")
        .trim()
    }

    console.log(data + "\n")
  } catch (e) {
    spinner.fail("An error occurred")

    if (e instanceof Error) console.error(e.message)
  } finally {
    spinner.stop()
  }
}
