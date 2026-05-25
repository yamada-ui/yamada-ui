import fetch from "node-fetch"
import {
  buildUrl,
  extractSections,
  fetchDoc,
  findHeadingIndex,
  trimToSection,
  trimToSectionByIndex,
} from "./fetch-doc"

vi.mock("node-fetch", () => ({ default: vi.fn() }))

const mockReadFileSync = vi.fn()

vi.mock("node:fs", () => ({
  mkdirSync: vi.fn(),
  readFileSync: (...args: unknown[]) => mockReadFileSync(...args),
  writeFileSync: vi.fn(),
}))

const mockFetch = vi.mocked(fetch)

function makeCacheEntry(content: string, timestamp: number): string {
  return JSON.stringify({ content, timestamp })
}

describe("buildUrl", () => {
  test("should return llms.txt url when no path given", () => {
    expect(buildUrl(undefined, "en")).toBe("https://yamada-ui.com/llms.txt")
  })

  test.each([
    [
      "/docs/components/button",
      "en",
      "https://yamada-ui.com/docs/components/button.md",
    ],
    [
      "/docs/components/button",
      "ja",
      "https://yamada-ui.com/ja/docs/components/button.md",
    ],
    [
      "/docs/components/button.md",
      "en",
      "https://yamada-ui.com/docs/components/button.md",
    ],
    [
      "docs/components/button",
      "en",
      "https://yamada-ui.com/docs/components/button.md",
    ],
    [
      "/components/button",
      "en",
      "https://yamada-ui.com/docs/components/button.md",
    ],
    [
      "components/button",
      "en",
      "https://yamada-ui.com/docs/components/button.md",
    ],
    [
      "/components/button",
      "ja",
      "https://yamada-ui.com/ja/docs/components/button.md",
    ],
  ])("buildUrl(%s, %s) → %s", (path, lang, expected) => {
    expect(buildUrl(path, lang)).toBe(expected)
  })
})

describe("fetchDoc", () => {
  beforeEach(() => {
    mockFetch.mockReset()
    mockReadFileSync.mockReset()
    mockReadFileSync.mockImplementation(() => {
      throw Object.assign(new Error("ENOENT"), { code: "ENOENT" })
    })
  })

  test("should return text content on success", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("# Button\n\nContent here."),
    } as any)

    const result = await fetchDoc(
      "https://yamada-ui.com/docs/components/button.md",
    )

    expect(result).toBe("# Button\n\nContent here.")
  })

  test("should throw when response is not ok", async () => {
    mockFetch.mockResolvedValue({ ok: false, status: 404 } as any)

    await expect(
      fetchDoc("https://yamada-ui.com/docs/components/nonexistent.md"),
    ).rejects.toThrow("Documentation not found:")
  })

  test("should return cached content without fetching when cache is fresh", async () => {
    mockReadFileSync.mockReturnValue(
      makeCacheEntry("# Cached Content\n", Date.now()),
    )

    const result = await fetchDoc(
      "https://yamada-ui.com/docs/components/cached.md",
    )

    expect(result).toBe("# Cached Content\n")
    expect(mockFetch).not.toHaveBeenCalled()
  })

  test("should fetch and update cache when cache is expired", async () => {
    const expired = Date.now() - 11 * 60 * 1000

    mockReadFileSync.mockReturnValue(makeCacheEntry("# Old Content\n", expired))

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("# Fresh Content\n"),
    } as any)

    const result = await fetchDoc(
      "https://yamada-ui.com/docs/components/expired.md",
    )

    expect(result).toBe("# Fresh Content\n")
    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/docs/components/expired.md",
      expect.anything(),
    )
  })

  test("should fetch normally when no cache file exists", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("# New Page\n"),
    } as any)

    const result = await fetchDoc(
      "https://yamada-ui.com/docs/components/new-page.md",
    )

    expect(result).toBe("# New Page\n")
    expect(mockFetch).toHaveBeenCalledWith(
      "https://yamada-ui.com/docs/components/new-page.md",
      expect.anything(),
    )
  })

  test("should use proxy agent when https_proxy env variable is set", async () => {
    vi.stubEnv("https_proxy", "http://proxy.example.com:8080")
    vi.resetModules()

    const mockFetchFn = vi.fn().mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("content"),
    })

    vi.doMock("node-fetch", () => ({ default: mockFetchFn }))

    const { fetchDoc: freshFetchDoc } = await import("./fetch-doc")
    const result = await freshFetchDoc("https://yamada-ui.com/llms.txt")

    expect(result).toBe("content")
    expect(mockFetchFn).toHaveBeenCalledWith(
      "https://yamada-ui.com/llms.txt",
      expect.objectContaining({ agent: expect.anything() }),
    )

    vi.unstubAllEnvs()
    vi.resetModules()
  })
})

describe("extractSections", () => {
  test("should return only heading lines joined by newlines", () => {
    const content = [
      "# Button",
      "",
      "Introduction text.",
      "",
      "## Usage",
      "",
      "Usage content.",
      "",
      "### Variants",
      "",
      "Variants content.",
    ].join("\n")

    expect(extractSections(content)).toBe("# Button\n## Usage\n### Variants")
  })

  test("should return empty string when no headings exist", () => {
    expect(extractSections("No headings here.\nJust plain text.")).toBe("")
  })
})

describe("trimToSection", () => {
  const content = [
    "# Button",
    "",
    "Introduction text.",
    "",
    "## Usage",
    "",
    "Usage content here.",
    "",
    "## Props",
    "",
    "Props content here.",
  ].join("\n")

  test("should trim content to start from matched heading", () => {
    const result = trimToSection(content, "usage")

    expect(result).toMatch(/^## Usage/)
    expect(result).not.toContain("Introduction text.")
    expect(result).not.toContain("Props content here.")
  })

  test("should match case-insensitively", () => {
    expect(trimToSection(content, "Usage")).toMatch(/^## Usage/)
  })

  test("should strip hash prefix before matching", () => {
    expect(trimToSection(content, "#usage")).toMatch(/^## Usage/)
  })

  test("should throw when section is not found", () => {
    expect(() => trimToSection(content, "nonexistent")).toThrow(
      "Section not found:",
    )
  })
})

describe("findHeadingIndex", () => {
  const content = [
    "# Button",
    "",
    "Intro.",
    "",
    "## Usage",
    "",
    "Details.",
    "",
    "### SubUsage",
    "",
    "Sub details.",
    "",
    "## Props",
    "",
    "Props content.",
  ].join("\n")

  test("should return 0 for the first heading", () => {
    expect(findHeadingIndex(content, "button")).toBe(0)
  })

  test("should return index by heading order", () => {
    expect(findHeadingIndex(content, "props")).toBe(3)
  })

  test("should return -1 for non-existent heading", () => {
    expect(findHeadingIndex(content, "nonexistent")).toBe(-1)
  })

  test("should strip hash prefix before matching", () => {
    expect(findHeadingIndex(content, "#usage")).toBe(1)
  })

  test("should match case-insensitively", () => {
    expect(findHeadingIndex(content, "USAGE")).toBe(1)
  })
})

describe("trimToSectionByIndex", () => {
  const content = [
    "# Button",
    "",
    "Intro.",
    "",
    "## Usage",
    "",
    "Usage content.",
    "",
    "## Props",
    "",
    "Props content.",
  ].join("\n")

  test("should return section by heading index", () => {
    const result = trimToSectionByIndex(content, 1, "usage")

    expect(result).toMatch(/^## Usage/)
    expect(result).toContain("Usage content.")
    expect(result).not.toContain("Intro.")
    expect(result).not.toContain("Props content.")
  })

  test("should throw when heading index is out of range", () => {
    expect(() => trimToSectionByIndex(content, 99, "nonexistent")).toThrow(
      "Section not found:",
    )
  })

  test("should include nested subheadings", () => {
    const nestedContent = [
      "# Button",
      "",
      "## Usage",
      "",
      "Usage content.",
      "",
      "### SubUsage",
      "",
      "Sub content.",
      "",
      "## Props",
      "",
      "Props content.",
    ].join("\n")

    const result = trimToSectionByIndex(nestedContent, 1, "usage")

    expect(result).toContain("Usage content.")
    expect(result).toContain("Sub content.")
    expect(result).not.toContain("Props content.")
  })
})
