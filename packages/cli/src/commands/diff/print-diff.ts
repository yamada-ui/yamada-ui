import type { ChangeObject } from "diff"
import type { Diff } from "./get-component-diff"
import c from "picocolors"

export function printDiff(name: string, diff: Diff | undefined) {
  if (!diff) return

  console.log(`- ${name}`)

  Object.entries(diff).forEach(([fileName, changes]) => {
    printCount(fileName, changes)
  })
}

export function printCount(
  name: string,
  changes: ChangeObject<string>[] = [],
  space = "  ",
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
