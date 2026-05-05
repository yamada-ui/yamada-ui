import { a11y, fireEvent, render, screen } from "#test"
import { ScrollArea } from "."
import { useScrollArea } from "./use-scroll-area"

const setScrollTop = (el: HTMLElement, value: number) => {
  Object.defineProperty(el, "scrollTop", {
    configurable: true,
    value,
  })
}

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

  for (const [key, value] of Object.entries(overrides)) {
    Object.defineProperty(window.navigator, key, {
      configurable: true,
      value,
    })
  }

  return () => {
    for (const [key, descriptor] of Object.entries(descriptors)) {
      if (descriptor) {
        Object.defineProperty(window.navigator, key, descriptor)
      } else {
        Reflect.deleteProperty(window.navigator, key)
      }
    }
  }
}

describe("<ScrollArea />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <ScrollArea h="xs">
        <p>Content</p>
      </ScrollArea>,
    )
  })

  test("renders children content correctly", () => {
    render(
      <ScrollArea>
        <p>Item 1</p>
      </ScrollArea>,
    )

    expect(screen.getByText("Item 1")).toBeInTheDocument()
  })

  test("calls onScrollPositionChange when scrolled", () => {
    const onScrollPositionChange = vi.fn()

    render(
      <ScrollArea
        data-testid="scroll-area"
        onScrollPositionChange={onScrollPositionChange}
      >
        <p>Item 1</p>
      </ScrollArea>,
    )

    const scrollArea = screen.getByTestId("scroll-area")

    setScrollTop(scrollArea, 100)
    fireEvent.scroll(scrollArea)

    expect(onScrollPositionChange).toHaveBeenCalledExactlyOnceWith({
      x: 0,
      y: 100,
    })
  })

  test("clears pending hover timeout on unmount", () => {
    const { unmount } = render(
      <ScrollArea type="hover" data-testid="scroll-area" scrollHideDelay={5000}>
        <p>Item 1</p>
      </ScrollArea>,
    )

    const scrollArea = screen.getByTestId("scroll-area")

    fireEvent.mouseEnter(scrollArea)
    fireEvent.mouseLeave(scrollArea)

    expect(() => unmount()).not.toThrow()
  })

  test("clears pending scroll timeout on unmount", () => {
    const { unmount } = render(
      <ScrollArea
        type="scroll"
        data-testid="scroll-area"
        scrollHideDelay={5000}
      >
        <p>Item 1</p>
      </ScrollArea>,
    )

    const scrollArea = screen.getByTestId("scroll-area")

    fireEvent.mouseEnter(scrollArea)
    fireEvent.mouseLeave(scrollArea)
    setScrollTop(scrollArea, 100)
    fireEvent.scroll(scrollArea)

    expect(() => unmount()).not.toThrow()
  })

  test("applies safari specific key format", () => {
    const restore = stubNavigator({
      platform: "MacIntel",
      userAgentData: { platform: "macOS" },
      vendor: "Apple Computer, Inc.",
    })

    try {
      render(
        <ScrollArea type="never" data-testid="scroll-area">
          <p>Content</p>
        </ScrollArea>,
      )

      const scrollArea = screen.getByTestId("scroll-area")

      expect(scrollArea).toHaveAttribute("data-key")
      expect(scrollArea.getAttribute("data-key")).toMatch(/-false-false$/)
    } finally {
      restore()
    }
  })

  test("merges consumer root props and preserves event handler order", () => {
    const order: string[] = []
    const restOnMouseEnter = vi.fn(() => order.push("rest-enter"))
    const restOnMouseLeave = vi.fn(() => order.push("rest-leave"))
    const restOnScroll = vi.fn(() => order.push("rest-scroll"))
    const propsOnMouseEnter = vi.fn(() => order.push("props-enter"))
    const propsOnMouseLeave = vi.fn(() => order.push("props-leave"))
    const propsOnScroll = vi.fn(() => order.push("props-scroll"))
    const onScrollPositionChange = vi.fn(() => order.push("internal-scroll"))

    const Component = () => {
      const { getRootProps } = useScrollArea({
        className: "rest-class",
        style: { color: "tomato" },
        onMouseEnter: restOnMouseEnter,
        onMouseLeave: restOnMouseLeave,
        onScroll: restOnScroll,
        onScrollPositionChange,
      })

      const rootProps = getRootProps({
        className: "props-class",
        style: { background: "black" },
        onMouseEnter: propsOnMouseEnter,
        onMouseLeave: propsOnMouseLeave,
        onScroll: propsOnScroll,
      })

      expect(rootProps.className).toContain("rest-class")
      expect(rootProps.className).toContain("props-class")
      expect(rootProps.style).toMatchObject({
        background: "black",
        color: "tomato",
        overflow: "auto",
      })

      return <div data-testid="scroll-area" {...rootProps} />
    }

    render(<Component />)

    const scrollArea = screen.getByTestId("scroll-area")
    setScrollTop(scrollArea, 24)

    fireEvent.mouseEnter(scrollArea)
    fireEvent.mouseLeave(scrollArea)
    fireEvent.scroll(scrollArea)

    expect(order).toStrictEqual([
      "rest-enter",
      "props-enter",
      "rest-leave",
      "props-leave",
      "rest-scroll",
      "props-scroll",
      "internal-scroll",
    ])
  })

  test("composes refs once in safari root props", () => {
    const restore = stubNavigator({
      platform: "MacIntel",
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

      render(<Component />)

      const scrollArea = screen.getByTestId("scroll-area-ref")

      expect(scrollArea).toHaveAttribute("data-key")
      expect(externalRef).toHaveBeenCalledWith(scrollArea)
      expect(consumerRef).toHaveBeenCalledWith(scrollArea)
      expect(
        externalRef.mock.calls.filter(([value]) => value === scrollArea),
      ).toHaveLength(1)
      expect(
        consumerRef.mock.calls.filter(([value]) => value === scrollArea),
      ).toHaveLength(1)
    } finally {
      restore()
    }
  })
})
