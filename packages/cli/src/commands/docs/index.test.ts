import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

vi.mock("node-fetch", () => ({
  default: vi.fn(),
}))

import fetch from "node-fetch"
import { docs } from "."

const mockFetch = vi.mocked(fetch)

function makeResponse(body: string, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    text: () => Promise.resolve(body),
  } as any
}

describe("docs", () => {
  let logSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>
  let exitSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    logSpy = vi.spyOn(console, "log").mockImplementation(vi.fn())
    errorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn())
    exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation(() => undefined as never)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test("should fetch llms.txt when no path given", async () => {
    mockFetch.mockResolvedValueOnce(makeResponse("llms content"))

    await docs.parseAsync([], { from: "user" })

    expect(mockFetch).toHaveBeenCalledWith("https://yamada-ui.com/llms.txt")
  })

  test("should fetch .md for given path", async () => {
    mockFetch.mockResolvedValueOnce(makeResponse("# Button\nButton docs"))

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/docs/components/button.md",
    )
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Button"))
  })

  test("should add /ja prefix when --lang ja", async () => {
    mockFetch.mockResolvedValueOnce(makeResponse("# ボタン"))

    await docs.parseAsync(["/docs/components/button", "--lang", "ja"], {
      from: "user",
    })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/ja/docs/components/button.md",
    )
  })

  test("should trim output from matching heading when hash given", async () => {
    const markdown = "# Button\n\nsome text\n\n## Usage\n\nusage text"
    mockFetch.mockResolvedValueOnce(makeResponse(markdown))

    await docs.parseAsync(["/docs/components/button#usage"], { from: "user" })

    const output = logSpy.mock.calls[0][0] as string
    expect(output).toContain("## Usage")
    expect(output).not.toContain("# Button")
  })

  test("should accept full URL as argument", async () => {
    mockFetch.mockResolvedValueOnce(makeResponse("# Button"))

    await docs.parseAsync(["https://yamada-ui.com/docs/components/button"], {
      from: "user",
    })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/docs/components/button.md",
    )
  })

  test("should call process.exit(1) when fetch returns non-ok", async () => {
    mockFetch.mockResolvedValueOnce(makeResponse("", 404))

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Failed"))
    expect(exitSpy).toHaveBeenCalledWith(1)
  })

  test("should call process.exit(1) when fetch throws", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network error"))

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

    expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining("Failed"))
    expect(exitSpy).toHaveBeenCalledWith(1)
  })
})
