import { beforeEach, describe, expect, test, vi } from "vitest"
import { replaceLinkListToMarkdown } from "./replace-link-list-to-markdown"

describe("replaceLinkListToMarkdown", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should replace LinkList tag with markdown link list", () => {
    const input = `## Section

<LinkList
  items={[
    { label: "First Link", href: "/first" },
    { label: "Second Link", href: "/second" },
  ]}
/>

More content`

    const result = replaceLinkListToMarkdown(input)

    expect(result).toContain("- [First Link](/first)")
    expect(result).toContain("- [Second Link](/second)")
    expect(result).not.toContain("<LinkList")
  })

  test("should replace multiple LinkList tags", () => {
    const input = `## First Section

<LinkList
  items={[
    { label: "Link 1", href: "/link1" },
  ]}
/>

## Second Section

<LinkList
  items={[
    { label: "Link 2", href: "/link2" },
  ]}
/>`

    const result = replaceLinkListToMarkdown(input)

    expect(result).toContain("- [Link 1](/link1)")
    expect(result).toContain("- [Link 2](/link2)")
    expect(result).not.toContain("<LinkList")
  })

  test("should return original text when no LinkList tags found", () => {
    const input = `## Regular content

This is just regular markdown content.

- Already a list
- With items`

    const result = replaceLinkListToMarkdown(input)

    expect(result).toBe(input)
  })

  test("should return original text when LinkList has empty items array", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)

    const input = `<LinkList
  items={[]}
/>`

    const result = replaceLinkListToMarkdown(input)

    expect(result).toBe(input)
    expect(consoleErrorSpy).not.toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })
})
