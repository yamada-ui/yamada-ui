import { page, render } from "#test/browser"
import { ScrollArea } from "."
import { useScrollArea } from "./use-scroll-area"

const stubNavigator = (overrides: {
  platform?: string
  userAgentData?: { platform: string }
  vendor?: string
}) => {
  const descriptors: { [key: string]: PropertyDescriptor | undefined } = {
    platform: Object.getOwnPropertyDescriptor(window.navigator, "platform"),
    userAgentData: Object.getOwnPropertyDescriptor(
      window.navigator,
      "userAgentData",
    ),
    vendor: Object.getOwnPropertyDescriptor(window.navigator, "vendor"),
  }

  for (const [key, value] of Object.entries(overrides))
    Object.defineProperty(window.navigator, key, {
      configurable: true,
      value,
    })

  return () => {
    for (const [key, descriptor] of Object.entries(descriptors))
      if (descriptor) Object.defineProperty(window.navigator, key, descriptor)
      else Reflect.deleteProperty(window.navigator, key)
  }
}

describe("<ScrollArea />", () => {
  test("applies safari specific key format", async () => {
    const restore = stubNavigator({
      platform: "MacIntel",
      userAgentData: { platform: "macOS" },
      vendor: "Apple Computer, Inc.",
    })

    try {
      await render(
        <ScrollArea type="never" data-testid="scroll-area">
          <p>Content</p>
        </ScrollArea>,
      )

      const scrollArea = page.getByTestId("scroll-area")
      const key = scrollArea.element().getAttribute("data-key")

      await expect.element(scrollArea).toHaveAttribute("data-key")
      expect(key).toMatch(/-false-false$/)
    } finally {
      restore()
    }
  })

  test("composes refs once in safari root props", async () => {
    const restore = stubNavigator({
      platform: "MacIntel",
      userAgentData: { platform: "macOS" },
      vendor: "Apple Computer, Inc.",
    })

    try {
      const externalRef = vi.fn()
      const consumerRef = vi.fn()

      const Component = () => {
        const { getRootProps } = useScrollArea({
          ref: externalRef,
        })

        return (
          <div
            data-testid="scroll-area-ref"
            {...getRootProps({ ref: consumerRef })}
          />
        )
      }

      await render(<Component />)

      const scrollArea = page.getByTestId("scroll-area-ref")
      const node = scrollArea.element()

      await expect.element(scrollArea).toHaveAttribute("data-key")
      expect(externalRef).toHaveBeenCalledWith(node)
      expect(consumerRef).toHaveBeenCalledWith(node)
      expect(
        externalRef.mock.calls.filter(([value]) => value === node),
      ).toHaveLength(1)
      expect(
        consumerRef.mock.calls.filter(([value]) => value === node),
      ).toHaveLength(1)
    } finally {
      restore()
    }
  })
})
