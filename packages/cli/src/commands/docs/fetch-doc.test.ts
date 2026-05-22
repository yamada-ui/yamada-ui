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

const mockFetch = vi.mocked(fetch)

describe("buildUrl", () => {
  test("should return llms.txt url when no path given", () => {
    expect(buildUrl(undefined, "en")).toBe("https://yamada-ui.com/llms.txt")
  })

  test("should return english doc url", () => {
    expect(buildUrl("/docs/components/button", "en")).toBe(
      "https://yamada-ui.com/docs/components/button.md",
    )
  })

  test("should return japanese doc url", () => {
    expect(buildUrl("/docs/components/button", "ja")).toBe(
      "https://yamada-ui.com/ja/docs/components/button.md",
    )
  })

  test("should not double-append .md when path already ends with .md", () => {
    expect(buildUrl("/docs/components/button.md", "en")).toBe(
      "https://yamada-ui.com/docs/components/button.md",
    )
  })
})

describe("fetchDoc", () => {
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
