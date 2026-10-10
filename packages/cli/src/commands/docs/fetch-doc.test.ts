import fetch from "node-fetch"
import { homedir } from "node:os"
import { join } from "node:path"
import {
  buildUrl,
  extractSections,
  fetchDoc,
  findHeadingIndex,
  trimToSection,
  trimToSectionByIndex,
} from "./fetch-doc"

vi.mock("node-fetch", () => ({ default: vi.fn() }))

const mockLstatSync = vi.fn()
const mockMkdirSync = vi.fn()
const mockReadFileSync = vi.fn()
const mockWriteFileSync = vi.fn()

vi.mock("node:fs", () => ({
  lstatSync: (...args: unknown[]) => mockLstatSync(...args),
  mkdirSync: (...args: unknown[]) => mockMkdirSync(...args),
  readFileSync: (...args: unknown[]) => mockReadFileSync(...args),
  writeFileSync: (...args: unknown[]) => mockWriteFileSync(...args),
}))

const mockFetch = vi.mocked(fetch)

function makeCacheEntry(content: string, timestamp: number): string {
  return JSON.stringify({ content, timestamp })
}

const fencedContent = [
  "# Button",
  "",
  "## Installation",
  "",
  "```bash",
  "# Install packages",
  "pnpm add @yamada-ui/react",
  "```",
  "",
  "~~~~sh",
  "## Not a heading",
  "~~~",
  "~~~~",
  "",
  "## Usage",
  "",
  "Usage content.",
].join("\n")

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
    mockLstatSync.mockReset()
    mockMkdirSync.mockReset()
    mockReadFileSync.mockReset()
    mockWriteFileSync.mockReset()
    mockLstatSync.mockReturnValue({ mode: 0o40700, uid: process.getuid?.() })
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

  test.each([
    ["owned by another user", { mode: 0o100600, uid: -1 }],
    ["writable by others", { mode: 0o100666, uid: process.getuid?.() }],
  ])("should fetch instead of trusting a cache file %s", async (_, stats) => {
    mockLstatSync.mockImplementation((path: string) =>
      path.endsWith("docs")
        ? { mode: 0o40700, uid: process.getuid?.() }
        : stats,
    )
    mockReadFileSync.mockReturnValue(
      makeCacheEntry("# Planted Content\n", Date.now()),
    )
    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("# Real Content\n"),
    } as any)

    const result = await fetchDoc(
      "https://yamada-ui.com/docs/components/planted.md",
    )

    expect(result).toBe("# Real Content\n")
  })

  test("should skip ownership checks where getuid is unavailable", async () => {
    vi.stubGlobal("process", { ...process, getuid: undefined })
    mockReadFileSync.mockReturnValue(
      makeCacheEntry("# Cached Content\n", Date.now()),
    )

    const result = await fetchDoc(
      "https://yamada-ui.com/docs/components/cached.md",
    )

    expect(result).toBe("# Cached Content\n")
    expect(mockLstatSync).not.toHaveBeenCalled()

    vi.unstubAllGlobals()
  })

  test("should fetch instead of trusting a cache directory writable by others", async () => {
    mockLstatSync.mockReturnValue({
      mode: 0o40777,
      uid: process.getuid?.(),
    })
    mockReadFileSync.mockReturnValue(
      makeCacheEntry("# Planted Content\n", Date.now()),
    )
    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("# Real Content\n"),
    } as any)

    const result = await fetchDoc(
      "https://yamada-ui.com/docs/components/planted.md",
    )

    expect(result).toBe("# Real Content\n")
    expect(mockWriteFileSync).not.toHaveBeenCalled()
  })

  test("should write cache privately under the user cache directory", async () => {
    vi.stubEnv("XDG_CACHE_HOME", "")
    vi.resetModules()

    const { fetchDoc: freshFetchDoc } = await import("./fetch-doc")

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("# Button\n"),
    } as any)

    await freshFetchDoc("https://yamada-ui.com/docs/components/button.md")

    const cacheDir = join(homedir(), ".cache", "yamada-ui", "docs")

    expect(mockMkdirSync).toHaveBeenCalledWith(cacheDir, {
      mode: 0o700,
      recursive: true,
    })
    expect(mockWriteFileSync).toHaveBeenCalledWith(
      expect.stringMatching(new RegExp(`^${cacheDir}`)),
      expect.any(String),
      { mode: 0o600 },
    )

    vi.unstubAllEnvs()
    vi.resetModules()
  })

  test("should write cache under XDG_CACHE_HOME when it is set", async () => {
    vi.stubEnv("XDG_CACHE_HOME", "/xdg-cache")
    vi.resetModules()

    const { fetchDoc: freshFetchDoc } = await import("./fetch-doc")

    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("# Button\n"),
    } as any)

    await freshFetchDoc("https://yamada-ui.com/docs/components/button.md")

    expect(mockMkdirSync).toHaveBeenCalledWith(
      join("/xdg-cache", "yamada-ui", "docs"),
      expect.anything(),
    )

    vi.unstubAllEnvs()
    vi.resetModules()
  })

  test("should return content even when writing cache fails", async () => {
    mockWriteFileSync.mockImplementation(() => {
      throw new Error("EROFS")
    })
    mockFetch.mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("# Button\n\nContent here."),
    } as any)

    const result = await fetchDoc(
      "https://yamada-ui.com/docs/components/button.md",
    )

    expect(result).toBe("# Button\n\nContent here.")
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
  test("should return heading lines with trailing newline", () => {
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

    expect(extractSections(content)).toBe("# Button\n## Usage\n### Variants\n")
  })

  test("should return empty string when no headings exist", () => {
    expect(extractSections("No headings here.\nJust plain text.")).toBe("")
  })

  test("should match japanese headings", () => {
    const content = "# ボタン\n\n## 使い方\n\nContent.\n"

    expect(extractSections(content)).toBe("# ボタン\n## 使い方\n")
  })

  test("should ignore comments inside fenced code", () => {
    expect(extractSections(fencedContent)).toBe(
      "# Button\n## Installation\n## Usage\n",
    )
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

  test("should keep fenced code containing comments within the section", () => {
    const result = trimToSection(fencedContent, "installation")

    expect(result).toContain("# Install packages")
    expect(result).toContain("pnpm add @yamada-ui/react")
    expect(result).not.toContain("Usage content.")
  })

  test("should not match comments inside fenced code", () => {
    expect(() => trimToSection(fencedContent, "install-packages")).toThrow(
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

  test("should match japanese headings", () => {
    const jaContent = "# ボタン\n\n## 使い方\n\nContent.\n"

    expect(findHeadingIndex(jaContent, "使い方")).toBe(1)
  })

  test("should not count comments inside fenced code", () => {
    expect(findHeadingIndex(fencedContent, "usage")).toBe(2)
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

  test("should keep fenced code containing comments within the section", () => {
    const result = trimToSectionByIndex(fencedContent, 1, "installation")

    expect(result).toContain("## Not a heading")
    expect(result).not.toContain("Usage content.")
  })
})
