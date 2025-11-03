import {
  attributes,
  groupAttributes,
  peerAttributes,
  pseudoClasses,
  pseudoElements,
} from "@yamada-ui/react/core"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import ora from "ora"
import path from "path"
import c from "picocolors"

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Writing pseudo elements`)

  await writeFileWithFormat(
    path.resolve("data", "pseudo-elements.json"),
    JSON.stringify(pseudoElements, null, 2),
    {
      parser: "json",
    },
  )

  spinner.succeed(`Wrote pseudo elements`)

  spinner.start(`Writing pseudo classes`)

  await writeFileWithFormat(
    path.resolve("data", "pseudo-classes.json"),
    JSON.stringify(pseudoClasses, null, 2),
    {
      parser: "json",
    },
  )

  spinner.succeed(`Wrote pseudo classes`)

  spinner.start(`Writing selectors`)

  await writeFileWithFormat(
    path.resolve("data", "selectors.json"),
    JSON.stringify(
      { ...attributes, ...groupAttributes, ...peerAttributes },
      null,
      2,
    ),
    {
      parser: "json",
    },
  )

  spinner.succeed(`Wrote selectors`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
