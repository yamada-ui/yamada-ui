import fs from "fs"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { fetchRegistry } from "../../utils"
import { view } from "./index"

vi.mock("fs")
vi.mock("../../utils")

describe("cli: view command", () => {
  let consoleLogSpy: any
  let consoleErrorSpy: any
  let processExitSpy: any

  const mockRegistryData = {
    sources: [
      { name: "button.tsx", content: "export const Button = () => <button />" },
      { name: "button.style.ts", content: "export const style = {}" },
    ],
  }

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => undefined)
    consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)
    processExitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((() => undefined) as any)

    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("displays directory listing when no file is specified", async () => {
    vi.mocked(fetchRegistry).mockResolvedValue(mockRegistryData as any)

    await view.parseAsync(["node", "test", "button"])

    expect(fetchRegistry).toHaveBeenCalledWith("button")
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

  test("downloads the file when a specific file is specified", async () => {
    vi.mocked(fetchRegistry).mockResolvedValue(mockRegistryData as any)

    await view.parseAsync(["node", "test", "button", "button.tsx"])

    expect(fetchRegistry).toHaveBeenCalledWith("button")

    expect(fs.writeFileSync).toHaveBeenCalledWith()
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("Successfully downloaded"),
    )
  })

  test("exits with error if component is not found", async () => {
    vi.mocked(fetchRegistry).mockResolvedValue({} as any)

    await view.parseAsync(["node", "test", "missing-component"])

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("not found or has no source files"),
    )
    expect(processExitSpy).toHaveBeenCalledWith(1)
  })

  test("exits with error if specific file is not found in component", async () => {
    vi.mocked(fetchRegistry).mockResolvedValue(mockRegistryData as any)

    await view.parseAsync(["node", "test", "button", "missing.tsx"])

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("File 'missing.tsx' not found"),
    )
    expect(processExitSpy).toHaveBeenCalledWith(1)
  })
})
