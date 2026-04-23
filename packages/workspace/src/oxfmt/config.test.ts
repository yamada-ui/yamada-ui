import { execFileSync } from "node:child_process"
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { createRequire } from "node:module"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { afterEach, describe, expect, test } from "vitest"

const require = createRequire(import.meta.url)

const repoRoot = fileURLToPath(new URL("../../../../", import.meta.url))
const oxfmtBin = path.join(
  path.dirname(require.resolve("oxfmt/package.json")),
  "bin/oxfmt",
)

describe("oxfmt config", () => {
  let tempDir: string

  afterEach(() => {
    if (tempDir) rmSync(tempDir, { force: true, recursive: true })
  })

  test("should skip CHANGELOG.md files during repo-wide formatting", () => {
    tempDir = mkdtempSync(
      path.join(repoRoot, "packages/workspace/tmp-oxfmt-config-"),
    )

    const sourceFilePath = path.join(tempDir, "test.ts")
    const changelogPath = path.join(tempDir, "CHANGELOG.md")
    const changelogContent = "# Title\n\n-   one\n-    two\n"

    writeFileSync(sourceFilePath, 'import   {b,a} from "x"\n')
    writeFileSync(changelogPath, changelogContent)

    execFileSync(
      process.execPath,
      [oxfmtBin, tempDir, "--config", "./packages/workspace/src/oxfmt/config.ts"],
      { cwd: repoRoot },
    )

    expect(readFileSync(sourceFilePath, "utf-8")).toBe(
      'import { b, a } from "x"\n',
    )
    expect(readFileSync(changelogPath, "utf-8")).toBe(changelogContent)
  })
})
