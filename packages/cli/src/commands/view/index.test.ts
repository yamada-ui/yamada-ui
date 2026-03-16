import { afterEach, describe, expect, test, vi } from "vitest"

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
    return Promise.resolve({ ok: false, status: 404 })
  }),
}))

import { view } from "."

describe("view", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("should display directory listing when no file is specified", async () => {
    const consoleLogSpy = vi
      .spyOn(console, "log")
      .mockImplementation(() => undefined)

    await view.parseAsync(["node", "test", "button"])

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("Directory listing for:"),
    )
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("button.tsx"),
    )
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("button.style.ts"),
    )
  })

  test("should display the file content when a specific file is specified", async () => {
    const consoleLogSpy = vi
      .spyOn(console, "log")
      .mockImplementation(() => undefined)

    await view.parseAsync(["node", "test", "button", "button.tsx"])

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("export const Button = () => <button />"),
    )

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("button.tsx"),
    )
  })

  test("should show error for non-existent component", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)
    const processExitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation(() => undefined as never)

    await view.parseAsync(["node", "test", "missing-component"])

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("not found or has no source files"),
    )
    expect(processExitSpy).toHaveBeenCalledWith(1)
  })

  test("should show error if specific file is not found in component", async () => {
    const consoleLogSpy = vi
      .spyOn(console, "log")
      .mockImplementation(() => undefined)
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)
    const processExitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation(() => undefined as never)

    await view.parseAsync(["node", "test", "button", "missing.tsx"])

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("not found in component"),
    )
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("Available files are:"),
    )
    expect(processExitSpy).toHaveBeenCalledWith(1)
  })
})
