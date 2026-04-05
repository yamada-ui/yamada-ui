import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

vi.mock("node-fetch", () => ({
  default: vi.fn(),
}))

vi.mock("ora", () => {
  const spinner = {
    fail: vi.fn().mockReturnThis(),
    start: vi.fn().mockReturnThis(),
    succeed: vi.fn().mockReturnThis(),
  }
  return { default: vi.fn(() => spinner) }
})

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
  beforeEach(() => {
    Object.defineProperty(process.stdin, "isTTY", {
      configurable: true,
      value: true,
      writable: true,
    })

    mockFetch.mockReset()
  })

  afterEach(() => {
    Object.defineProperty(process.stdin, "isTTY", {
      configurable: true,
      value: undefined,
      writable: true,
    })
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
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("Button"))
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

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("## Usage"),
    )
    expect(console.log).not.toHaveBeenCalledWith(
      expect.stringContaining("# Button"),
    )
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

  test("should call spinner.fail when fetch returns non-ok", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    mockFetch.mockResolvedValueOnce(makeResponse("", 404))

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("Failed to fetch docs: 404"),
    )
  })

  test("should call spinner.fail when fetch throws", async () => {
    const ora = await import("ora")
    const spinner = ora.default()
    vi.mocked(spinner.fail).mockClear()

    mockFetch.mockRejectedValueOnce(new Error("network error"))

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("network error"),
    )
  })
})
