import { beforeEach, describe, expect, test, vi } from "vitest"
import {
  printDiff,
  printDiffDependencies,
  printDiffFile,
  printDiffFiles,
} from "./print-diff"

describe("printDiff", () => {
  let stdoutWrite: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    stdoutWrite = vi
      .spyOn(process.stdout, "write")
      .mockImplementation(() => true)
  })

  test("should do nothing when changes is undefined", () => {
    printDiff(undefined)
    expect(console.log).not.toHaveBeenCalled()
  })

  test("should print added lines in green", () => {
    printDiff({
      "file.ts": {
        diff: [{ added: true, count: 1, removed: false, value: "+line" }],
        remote: "+line",
      },
    })
    expect(stdoutWrite).toHaveBeenCalledWith(expect.any(String))
  })

  test("should print removed lines in red", () => {
    printDiff({
      "file.ts": {
        diff: [{ added: false, count: 1, removed: true, value: "-line" }],
        local: "-line",
      },
    })
    expect(stdoutWrite).toHaveBeenCalledWith(expect.any(String))
  })

  test("should print unchanged lines when detail is true", () => {
    printDiff(
      {
        "file.ts": {
          diff: [
            { added: false, count: 1, removed: false, value: "unchanged" },
          ],
          local: "unchanged",
          remote: "unchanged",
        },
      },
      true,
    )
    expect(stdoutWrite).toHaveBeenCalledWith(
      expect.stringContaining("unchanged"),
    )
  })

  test("should not print unchanged lines when detail is false", () => {
    printDiff({
      "file.ts": {
        diff: [{ added: false, count: 1, removed: false, value: "unchanged" }],
        local: "unchanged",
        remote: "unchanged",
      },
    })
    expect(stdoutWrite).not.toHaveBeenCalledWith(
      expect.stringContaining("unchanged"),
    )
  })
})

describe("printDiffFiles", () => {
  test("should do nothing when changes is undefined", () => {
    printDiffFiles("comp", undefined)
    expect(console.log).not.toHaveBeenCalled()
  })

  test("should print file diff info", () => {
    printDiffFiles("button", {
      "index.ts": {
        diff: [{ added: true, count: 3, removed: false, value: "code" }],
        remote: "code",
      },
    })
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("button"))
  })
})

describe("printDiffFile", () => {
  test("should do nothing for empty diff", () => {
    printDiffFile("file.ts", [])
    expect(console.log).not.toHaveBeenCalled()
  })

  test("should do nothing when no added or removed", () => {
    printDiffFile("file.ts", [
      { added: false, count: 5, removed: false, value: "unchanged" },
    ])
    expect(console.log).not.toHaveBeenCalled()
  })

  test("should print insertions and deletions", () => {
    printDiffFile("file.ts", [
      { added: true, count: 3, removed: false, value: "added" },
      { added: false, count: 2, removed: true, value: "removed" },
    ])
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("3"))
  })

  test("should print with space prefix", () => {
    printDiffFile(
      "file.ts",
      [{ added: true, count: 1, removed: false, value: "a" }],
      "  ",
    )
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("  -"))
  })
})

describe("printDiffDependencies", () => {
  test("should print added dependencies", () => {
    printDiffDependencies({ add: ["lodash@^4"], remove: [], update: [] })
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("lodash"))
  })

  test("should print removed dependencies", () => {
    printDiffDependencies({ add: [], remove: ["lodash@^4"], update: [] })
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("lodash"))
  })

  test("should print updated dependencies", () => {
    printDiffDependencies({
      add: [],
      remove: [],
      update: [{ name: "react", current: "^17", wanted: "^18" }],
    })
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("react"))
  })
})
