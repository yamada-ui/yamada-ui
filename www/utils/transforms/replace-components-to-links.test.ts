import { beforeEach, describe, expect, test, vi } from "vitest"
import { replaceComponentsToLinks } from "./replace-components-to-links"

describe("replaceComponentsToLinks", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should replace ComponentList tag with markdown link", () => {
    const input = `## Components

<ComponentList />

More content`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the complete list of components on the website](/docs/components)",
    )
    expect(result).not.toContain("<ComponentList")
  })

  test("should replace HookList tag with markdown link", () => {
    const input = `## Hooks

<HookList />

More content`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the complete list of hooks on the website](/docs/hooks)",
    )
    expect(result).not.toContain("<HookList")
  })

  test("should replace Contributors tag without type", () => {
    const input = `## Contributors

<Contributors />

More content`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the list of contributors on the website](/docs/community#contributors)",
    )
    expect(result).not.toContain("<Contributors />")
  })

  test("should replace Contributors tag with type maintainers", () => {
    const input = `## Maintainers

<Contributors type="maintainers" />

More content`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the list of maintainers on the website](/docs/community#maintainers)",
    )
    expect(result).not.toContain('<Contributors type="maintainers"')
  })

  test("should replace Contributors tag with type emeriti", () => {
    const input = `## Emeriti

<Contributors type="emeriti" />

More content`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the list of emeriti contributors on the website](/docs/community#emeriti)",
    )
    expect(result).not.toContain('<Contributors type="emeriti"')
  })

  test("should replace Sponsors tag with type platinum", () => {
    const input = `## Platinum Sponsors

<Sponsors type="platinum" />

More content`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the list of platinum sponsors on the website](/docs/community#platinum-sponsors)",
    )
    expect(result).not.toContain('<Sponsors type="platinum"')
  })

  test("should replace Sponsors tag with type gold", () => {
    const input = `## Gold Sponsors

<Sponsors type="gold" />

More content`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the list of gold sponsors on the website](/docs/community#gold-sponsors)",
    )
    expect(result).not.toContain('<Sponsors type="gold"')
  })

  test("should replace Sponsors tag with type silver", () => {
    const input = `## Silver Sponsors

<Sponsors type="silver" />

More content`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the list of silver sponsors on the website](/docs/community#silver-sponsors)",
    )
    expect(result).not.toContain('<Sponsors type="silver"')
  })

  test("should replace multiple component tags", () => {
    const input = `## Components

<ComponentList />

## Hooks

<HookList />

## Contributors

<Contributors type="maintainers" />

## Sponsors

<Sponsors type="platinum" />`

    const result = replaceComponentsToLinks(input)

    expect(result).toContain(
      "[View the complete list of components on the website](/docs/components)",
    )
    expect(result).toContain(
      "[View the complete list of hooks on the website](/docs/hooks)",
    )
    expect(result).toContain(
      "[View the list of maintainers on the website](/docs/community#maintainers)",
    )
    expect(result).toContain(
      "[View the list of platinum sponsors on the website](/docs/community#platinum-sponsors)",
    )
    expect(result).not.toContain("<ComponentList")
    expect(result).not.toContain("<HookList")
    expect(result).not.toContain("<Contributors")
    expect(result).not.toContain("<Sponsors")
  })

  test("should return original text when no component tags found", () => {
    const input = `## Regular content

This is just regular markdown content.

- Already a list
- With items`

    const result = replaceComponentsToLinks(input)

    expect(result).toBe(input)
  })
})
