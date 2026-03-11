import type fs from "fs"
import { mkdtempSync, rmSync } from "fs"
import { tmpdir } from "os"
import path from "path"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

vi.mock("./fs", async (importOriginal) => {
  const actual = await importOriginal<typeof fs>()
  return {
    ...actual,
    execFileAsync: vi.fn(),
  }
})

import { initGit, isInGitRepo } from "./git"

const { execFileAsync } = vi.mocked(await import("./fs"))

describe("isInGitRepo", () => {
  test("should return true when in git repo", async () => {
    execFileAsync.mockResolvedValueOnce({ stderr: "", stdout: "true" } as any)
    await expect(isInGitRepo()).resolves.toBeTruthy()
  })

  test("should return false when not in git repo", async () => {
    execFileAsync.mockRejectedValueOnce(new Error("not a git repo"))
    await expect(isInGitRepo()).resolves.toBeFalsy()
  })
})

describe("initGit", () => {
  let tempDir: string

  beforeEach(() => {
    tempDir = mkdtempSync(path.join(tmpdir(), "yamada-cli-"))
  })

  afterEach(() => {
    rmSync(tempDir, { force: true, recursive: true })
  })

  test("should return false when already in git repo", async () => {
    execFileAsync
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockResolvedValueOnce({ stderr: "", stdout: "true" } as any)
    await expect(initGit(tempDir)).resolves.toBeFalsy()
  })

  test("should init git and return true", async () => {
    execFileAsync
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockRejectedValueOnce(new Error("not a git repo"))
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockResolvedValueOnce({ stderr: "", stdout: "main" } as any)
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
    await expect(initGit(tempDir)).resolves.toBeTruthy()
  })

  test("should checkout main when no default branch", async () => {
    execFileAsync
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockRejectedValueOnce(new Error("not a git repo"))
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockRejectedValueOnce(new Error("no default branch"))
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
    await expect(initGit(tempDir)).resolves.toBeTruthy()
  })

  test("should return false when git is not installed", async () => {
    execFileAsync.mockRejectedValueOnce(new Error("git not found"))
    await expect(initGit(tempDir)).resolves.toBeFalsy()
  })

  test("should cleanup .git on error after init", async () => {
    execFileAsync
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockRejectedValueOnce(new Error("not a git repo"))
      .mockResolvedValueOnce({ stderr: "", stdout: "" } as any)
      .mockResolvedValueOnce({ stderr: "", stdout: "main" } as any)
      .mockRejectedValueOnce(new Error("add failed"))
    await expect(initGit(tempDir)).resolves.toBeFalsy()
  })
})
