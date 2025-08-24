import type { Changes, DependencyMap, Diff } from "./get-diff"
import c from "picocolors"
import { getPackageName } from "../../utils"

export function printDiff(changes: Changes | undefined, detail = false) {
  if (!changes) return

  Object.entries(changes).forEach(([fileName, { diff }]) => {
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

export function printDiffFiles(name: string, changes: Changes | undefined) {
  if (!changes) return

  console.log(`- ${name}`)

  Object.entries(changes).forEach(([fileName, { diff }]) => {
    printDiffFile(fileName, diff, "  ")
  })
}

export function printDiffFile(name: string, diff: Diff = [], space = "") {
  const added = diff.reduce((prev, { added, count }) => {
    if (added) return prev + count

    return prev
  }, 0)
  const removed = diff.reduce((prev, { count, removed }) => {
    if (removed) return prev + count

    return prev
  }, 0)

  if (!added && !removed) return

  const result = [`${space}- ${c.cyan(name)}`]

  if (added) result.push(`${c.green(added)} insertions`)
  if (removed) result.push(`${c.red(removed)} deletions`)

  console.log(result.join(" "))
}

export function printDiffDependencies({ add, remove, update }: DependencyMap) {
  console.log("- dependencies")

  if (add.length) {
    add.forEach((name) => {
      console.log(`  - ${c.green(getPackageName(name))}`)
    })
  }

  if (remove.length) {
    remove.forEach((name) => {
      console.log(`  - ${c.red(getPackageName(name))}`)
    })
  }

  if (update.length) {
    update.forEach(({ name, current, wanted }) => {
      console.log(`  - ${name}@${c.red(current)}->${c.green(wanted)}`)
    })
  }
}
