import fetch from "node-fetch"
import ora from "ora"
import { docs } from "."

function setTTY(value: boolean) {
  Object.defineProperty(process.stdin, "isTTY", { configurable: true, value })
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

  test("should fetch english doc by path", async () => {
    mockResponse("# Button\n")
    setTTY(true)

    await docs.parseAsync(["/docs/components/button"], { from: "user" })

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

    expect(stdoutSpy).toHaveBeenCalledWith("# Button\n## Usage\n### Variants")
  })
})
