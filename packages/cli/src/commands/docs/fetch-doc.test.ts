import fetch from "node-fetch"
import { buildUrl, fetchDoc, trimToSection } from "./fetch-doc"

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
    ).rejects.toThrow("Documentation not found: /docs/components/nonexistent")
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
    expect(result).toContain("Props content here.")
  })

  test("should match case-insensitively", () => {
    expect(trimToSection(content, "Usage")).toMatch(/^## Usage/)
  })

  test("should strip hash prefix before matching", () => {
    expect(trimToSection(content, "#usage")).toMatch(/^## Usage/)
  })

  test("should throw when section is not found", () => {
    expect(() => trimToSection(content, "nonexistent")).toThrow(
      "Section not found: #nonexistent",
    )
  })
})
