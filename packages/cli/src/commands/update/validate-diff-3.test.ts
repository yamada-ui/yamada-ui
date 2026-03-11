import { describe, expect, test, vi } from "vitest"

vi.mock("child_process", () => ({
  execFile: vi.fn(),
}))

vi.mock("util", async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    promisify: (fn: any) => {
      return (...args: any[]) => {
        return new Promise((resolve, reject) => {
          fn(...args, (err: any, result: any) => {
            if (err) reject(err)
            else resolve(result)
          })
        })
      }
    },
  }
})

import { execFile } from "child_process"
import { validateDiff3 } from "./validate-diff-3"

const mockExecFile = vi.mocked(execFile)

describe("validateDiff3", () => {
  test("should return true when diff3 is available", async () => {
    mockExecFile.mockImplementation((...args: any[]) => {
      const cb = args[args.length - 1]
      cb(null, { stderr: "", stdout: "diff3 version" })
      return undefined as any
    })
    const result = await validateDiff3()
    expect(result).toBeTruthy()
  })

  test("should throw when diff3 is not installed", async () => {
    mockExecFile.mockImplementation((...args: any[]) => {
      const cb = args[args.length - 1]
      cb(new Error("not found"))
      return undefined as any
    })
    await expect(validateDiff3()).rejects.toThrowError("diff3")
  })
})
