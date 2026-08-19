import fetch from "node-fetch"
import { Readable } from "node:stream"
import ora from "ora"
import { docs } from "."

vi.mock("node:fs", () => ({
  mkdirSync: vi.fn(),
  readFileSync: vi.fn().mockImplementation(() => {
    throw Object.assign(new Error("ENOENT"), { code: "ENOENT" })
  }),
  writeFileSync: vi.fn(),
}))

function setTTY(value: boolean) {
  Object.defineProperty(process.stdin, "isTTY", { configurable: true, value })
}

function mockStdinStream(text: string): () => void {
  const descriptor = Object.getOwnPropertyDescriptor(process, "stdin")
  const readable = Readable.from([Buffer.from(text)])

  Object.defineProperty(process, "stdin", {
    configurable: true,
    value: readable,
  })

  return () => {
    if (descriptor) {
      Object.defineProperty(process, "stdin", descriptor)
    }
  }
}

vi.mock("node-fetch", () => ({ default: vi.fn() }))

const mockFetch = vi.mocked(fetch)

function mockResponse(text: string) {
  mockFetch.mockResolvedValue({
    ok: true,
    text: () => Promise.resolve(text),
  } as any)
}

function mockNotFound() {
  mockFetch.mockResolvedValue({ ok: false, status: 404 } as any)
}

describe("docs", () => {
  let stdoutSpy: ReturnType<typeof vi.spyOn>
  let exitSpy: ReturnType<typeof vi.spyOn>
  let isTTY: boolean | undefined

  beforeEach(() => {
    stdoutSpy = vi.spyOn(process.stdout, "write").mockImplementation(() => true)
    exitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation(() => undefined as never)
    isTTY = process.stdin.isTTY
  })

  afterEach(() => {
    stdoutSpy.mockRestore()
    exitSpy.mockRestore()
    setTTY(isTTY ?? true)
  })

  test("should fetch llms.txt when no argument given", async () => {
    mockResponse("# Index\n")
    setTTY(true)

    await docs.parseAsync([], { from: "user" })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/llms.txt",
      expect.anything(),
    )
    expect(stdoutSpy).toHaveBeenCalledWith("# Index\n")
  })

  test.each([
    ["/docs/components/button"],
    ["/components/button"],
    ["components/button"],
  ])("should fetch english doc for path %s", async (path) => {
    mockResponse("# Button\n")
    setTTY(true)

    await docs.parseAsync([path], { from: "user" })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/docs/components/button.md",
      expect.anything(),
    )
  })

  test("should fetch japanese doc with --lang ja", async () => {
    mockResponse("# Button\n")
    setTTY(true)

    await docs.parseAsync(["/docs/components/button", "--lang", "ja"], {
      from: "user",
    })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/ja/docs/components/button.md",
      expect.anything(),
    )
  })

  test("should output from matched section when hash fragment given", async () => {
    mockResponse("# Button\n\nIntro.\n\n## Usage\n\nUsage text.\n")
    setTTY(true)

    await docs.parseAsync(["/docs/components/button#usage"], { from: "user" })

    expect(stdoutSpy).toHaveBeenCalledWith(expect.stringMatching(/^## Usage/))
  })

  test("should treat whitespace-only argument as no argument and fetch llms.txt", async () => {
    mockResponse("# Index\n")
    setTTY(true)

    await docs.parseAsync(["   "], { from: "user" })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/llms.txt",
      expect.anything(),
    )
  })

  test("should show error when hash given without a path", async () => {
    setTTY(true)

    const spinner = ora()

    await docs.parseAsync(["#usage"], { from: "user" })

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("A documentation path is required"),
    )
  })

  test("should show error when path not found", async () => {
    mockNotFound()
    setTTY(true)

    const spinner = ora()

    await docs.parseAsync(["/docs/components/nonexistent"], { from: "user" })

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("Documentation not found:"),
    )
  })

  test("should show error when hash section not found", async () => {
    mockResponse("# Button\n\n## Usage\n\nContent.\n")
    setTTY(true)

    const spinner = ora()

    await docs.parseAsync(["/docs/components/button#nonexistent"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("Section not found:"),
    )
  })

  test("should show spinner while fetching documentation", async () => {
    mockResponse("# Button\n")
    setTTY(true)

    const spinner = ora()

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

    expect(spinner.start).toHaveBeenCalledWith("Fetching documentation")
    expect(spinner.succeed).toHaveBeenCalledWith("Fetched documentation")
  })

  test("should strip language prefix from full URL pathname", async () => {
    mockResponse("# Button\n")
    setTTY(true)

    await docs.parseAsync(
      ["https://yamada-ui.com/ja/docs/components/button", "--lang", "ja"],
      { from: "user" },
    )

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/ja/docs/components/button.md",
      expect.anything(),
    )
  })

  test("should extract hash fragment from full URL", async () => {
    mockResponse("# Button\n\n## Usage\n\nUsage text.\n")
    setTTY(true)

    await docs.parseAsync(
      ["https://yamada-ui.com/docs/components/button#usage"],
      { from: "user" },
    )

    expect(stdoutSpy).toHaveBeenCalledWith(expect.stringMatching(/^## Usage/))
  })

  test("should show error when full URL is not from yamada-ui.com", async () => {
    setTTY(true)

    const spinner = ora()

    await docs.parseAsync(["https://example.com/docs/components/button"], {
      from: "user",
    })

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("example.com"),
    )
  })

  test("should use path argument even in non-TTY environment", async () => {
    mockResponse("# Button\n")
    setTTY(false)

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/docs/components/button.md",
      expect.anything(),
    )
  })

  test("should output section headings when --sections flag is given", async () => {
    mockResponse(
      "# Button\n\nIntro.\n\n## Usage\n\nUsage text.\n\n### Variants\n\nVariants text.\n",
    )
    setTTY(true)

    await docs.parseAsync(["/docs/components/button", "--sections"], {
      from: "user",
    })

    expect(stdoutSpy).toHaveBeenCalledWith("# Button\n## Usage\n### Variants\n")
  })

  test("should read path from stdin when no argument given in non-TTY environment", async () => {
    const restore = mockStdinStream("/docs/components/button\n")

    mockResponse("# Button\n")

    try {
      await docs.parseAsync([], { from: "user" })

      expect(mockFetch).toHaveBeenCalledWith(
        "https://yamada-ui.com/docs/components/button.md",
        expect.anything(),
      )
    } finally {
      restore()
    }
  })

  test("should fetch llms.txt when stdin provides only whitespace", async () => {
    const restore = mockStdinStream("   \n")

    mockResponse("# Index\n")

    try {
      await docs.parseAsync([], { from: "user" })

      expect(mockFetch).toHaveBeenCalledWith(
        "https://yamada-ui.com/llms.txt",
        expect.anything(),
      )
    } finally {
      restore()
    }
  })

  test("should trim ja section by en heading index when lang is ja and hash given", async () => {
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        text: () =>
          Promise.resolve(
            "# ボタン\n\n## 使い方\n\n使い方テキスト。\n\n## Props\n\nPropsテキスト。\n",
          ),
      } as any)
      .mockResolvedValueOnce({
        ok: true,
        text: () =>
          Promise.resolve(
            "# Button\n\n## Usage\n\nUsage text.\n\n## Props\n\nProps text.\n",
          ),
      } as any)

    setTTY(true)

    await docs.parseAsync(["/docs/components/button#usage", "--lang", "ja"], {
      from: "user",
    })

    expect(stdoutSpy).toHaveBeenCalledWith(expect.stringMatching(/^## 使い方/))
  })

  test("should show error when section hash is not found in en content for ja lang lookup", async () => {
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        text: () =>
          Promise.resolve("# ボタン\n\n## 使い方\n\n使い方テキスト。\n"),
      } as any)
      .mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve("# Button\n\n## Usage\n\nUsage text.\n"),
      } as any)

    setTTY(true)

    const spinner = ora()

    await docs.parseAsync(
      ["/docs/components/button#nonexistent", "--lang", "ja"],
      { from: "user" },
    )

    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("Section not found:"),
    )
  })

  test("should show generic error message when a non-Error value is thrown", async () => {
    mockFetch.mockRejectedValue("unexpected string error")
    setTTY(true)

    const spinner = ora()

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

    expect(spinner.fail).toHaveBeenCalledWith("An unknown error occurred")
  })

  test("should not call spinner.succeed when section is not found", async () => {
    mockResponse("# Button\n\n## Usage\n\nContent.\n")
    setTTY(true)

    const spinner = ora()

    await docs.parseAsync(["/docs/components/button#nonexistent"], {
      from: "user",
    })

    expect(spinner.succeed).not.toHaveBeenCalled()
    expect(spinner.fail).toHaveBeenCalledWith(
      expect.stringContaining("Section not found:"),
    )
  })

  test("should auto-detect japanese from /ja URL prefix without --lang ja", async () => {
    mockResponse("# ボタン\n")
    setTTY(true)

    await docs.parseAsync(["https://yamada-ui.com/ja/docs/components/button"], {
      from: "user",
    })

    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/ja/docs/components/button.md",
      expect.anything(),
    )
  })
})
