import { describe, it, beforeEach, afterEach, expect } from "vitest"
import { join } from "path"
import { copySync, removeSync, readFileSync } from "fs-extra"
import { migrateDeprecatedProps } from "../src/command/migrate/migrateDeprecatedProps"

const FIXTURE_DIR = join(__dirname, "fixtures")
const TMP_DIR = join(__dirname, "tmp-test")

describe("migrateDeprecatedProps (ユニットテスト)", () => {
  beforeEach(() => {
    removeSync(TMP_DIR)
    copySync(FIXTURE_DIR, TMP_DIR)
  })

  afterEach(() => {
    // removeSync(TMP_DIR)
  })

  it("should do nothing when --dry-run is specified", async () => {
    await migrateDeprecatedProps({
      cwd: TMP_DIR,
      dryRun: true,
    })

    const examplePath = join(TMP_DIR, "src", "examples.tsx")
    const code = readFileSync(examplePath, "utf-8")

    expect(code).toContain("isDisabled")
    expect(code).toContain("leftIcon")
    expect(code).not.toContain("disabled")
    expect(code).not.toContain("startIcon")
  })

  it("should migrate deprecated props in interfaces and JSX", async () => {
    await migrateDeprecatedProps({
      cwd: TMP_DIR,
      dryRun: false,
    })

    const examplePath = join(TMP_DIR, "src", "examples.tsx")
    const code = readFileSync(examplePath, "utf-8")

    expect(code).not.toContain("isDisabled")
    expect(code).toContain("disabled")

    expect(code).not.toContain("leftIcon")
    expect(code).toContain("startIcon")

    expect(code).toContain("onClick")
  })

})

