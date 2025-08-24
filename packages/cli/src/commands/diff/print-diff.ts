import type { ChangeObject } from "diff"
import type { Diff } from "./get-diff"
import c from "picocolors"

export function printDiff(diff: Diff | undefined, detail = false) {
  if (!diff) return

  Object.entries(diff).forEach(([fileName, diff]) => {
    console.log(`- ${c.cyan(fileName)}`)

    console.log("")

    diff.forEach(({ added, removed, value }) => {
      if (added) {
        return process.stdout.write(c.green(value))
      } else if (removed) {
        return process.stdout.write(c.red(value))
      } else {
        if (detail) return process.stdout.write(value)
      }
    })
  })
}

export function printDiffFiles(name: string, diff: Diff | undefined) {
  if (!diff) return

  console.log(`- ${name}`)

  Object.entries(diff).forEach(([fileName, changes]) => {
    printDiffFile(fileName, changes, "  ")
  })
}

export function printDiffFile(
  name: string,
  changes: ChangeObject<string>[] = [],
  space = "",
) {
  const added = changes.reduce((prev, { added, count }) => {
    if (added) return prev + count

    return prev
  }, 0)
  const removed = changes.reduce((prev, { count, removed }) => {
    if (removed) return prev + count

    return prev
  }, 0)

  console.log(
    `${space}- ${c.cyan(name)} ${c.green(added)} insertions ${c.red(removed)} deletions`,
  )
}
