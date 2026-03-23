import { afterEach, describe, expect, test, vi } from "vitest"

vi.mock("./print-view", () => ({
  printSource: vi.fn(),
  printTree: vi.fn(),
}))

vi.mock("node-fetch", () => ({
  default: vi.fn().mockImplementation((url: string) => {
    if (url.includes("button.json")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            section: "components",
            sources: [
              {
                name: "button.tsx",
                content: "export const Button = () => <button />",
              },
              { name: "button.style.ts", content: "export const style = {}" },
            ],
          }),
        ok: true,
      })
    }
    if (url.includes("no-content-component.json")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            section: "components",
            sources: [
              {
                name: "no-content.tsx",
              },
            ],
          }),
        ok: true,
      })
    }
    if (url.includes("missing-component.json")) {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            section: "components",
            sources: [],
          }),
        ok: true,
      })
    }
    return Promise.resolve({ ok: false, status: 404 })
  }),
}))

import { view } from "."
import { printSource, printTree } from "./print-view"

describe("view", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test("should call printTree when no file is specified", async () => {
    await view.parseAsync(["node", "test", "button"])

    expect(printTree).toHaveBeenCalledWith(
      "button",
      expect.arrayContaining([
        expect.objectContaining({ name: "button.tsx" }),
        expect.objectContaining({ name: "button.style.ts" }),
      ]),
    )
  })

  test("should call printSource when a specific file is specified", async () => {
    await view.parseAsync(["node", "test", "button", "button.tsx"])

    expect(printSource).toHaveBeenCalledWith(
      "button.tsx",
      "export const Button = () => <button />",
    )
  })

  test("should pass --tag option to the registry URL", async () => {
    const nodeFetch = await import("node-fetch")

    await view.parseAsync(["node", "test", "button", "--tag", "next"])

    expect(nodeFetch.default).toHaveBeenCalledWith(
      expect.stringContaining("/next/"),
      expect.anything(),
    )
  })

  test("should show error for non-existent component", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await view.parseAsync(["node", "test", "missing-component"])

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("not found or has no source files"),
    )
  })

  test("should show error if specific file is not found in component", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await view.parseAsync(["node", "test", "button", "missing.tsx"])

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("not found in registry item"),
    )
    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("Available files are:"),
    )
  })

  test("should show error when file content is missing", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await view.parseAsync([
      "node",
      "test",
      "no-content-component",
      "no-content.tsx",
    ])

    expect(spinner.fail).toHaveBeenCalledWith(
      "No readable content found for file 'no-content.tsx'.",
    )
  })

  test("should show fallback message when non-error is thrown", async () => {
    const utils = await import("../../utils")
    const fetchRegistrySpy = vi.spyOn(utils, "fetchRegistry")
    fetchRegistrySpy.mockRejectedValueOnce("fatal")

    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    await view.parseAsync(["node", "test", "button"])

    expect(spinner.fail).toHaveBeenCalledWith("An unknown error occurred")

    fetchRegistrySpy.mockRestore()
  })
})
