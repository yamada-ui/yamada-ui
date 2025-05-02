import { a11y, act, fireEvent, render, waitFor } from "@yamada-ui/test"
import { ScrollArea } from "../src"
import { Content } from "./content"

describe("<ScrollArea />", () => {
  test("renders with no errors", async () => {
    const { container, getByTestId } = render(
      <ScrollArea data-testid="ScrollArea" h="xs">
        <Content />
      </ScrollArea>,
    )

    getByTestId("ScrollArea")

    await a11y(container)
  })

  test("contains the children content", () => {
    const { getByText } = render(
      <ScrollArea data-testid="ScrollArea">
        <p>Item 1</p>
      </ScrollArea>,
    )

    getByText("Item 1")
  })

  test("can control the scroll position", () => {
    const { container } = render(
      <ScrollArea>
        <Content />
      </ScrollArea>,
    )

    act(() => {
      fireEvent.scroll(container, {
        target: {
          scrollTop: 0,
        },
      })
      expect(container.scrollTop).toBe(0)
    })

    act(() => {
      fireEvent.scroll(container, {
        target: {
          scrollTop: 200,
        },
      })
      expect(container.scrollTop).toBe(200)
    })
  })

  test("can have inner props", () => {
    const { container, rerender } = render(
      <ScrollArea
        innerProps={{
          bg: "primary",
        }}
      >
        <Content />
      </ScrollArea>,
    )

    const inner = container.querySelector(".ui-scroll-area__inner")!

    const style = window.getComputedStyle(inner)
    expect(style.background).toBe("var(--ui-colors-primary)")

    rerender(
      <ScrollArea>
        <Content />
      </ScrollArea>,
    )

    expect(container.querySelector(".ui-scroll-area__inner")).toBeNull()
  })

  test("onScrollPositionChange works correctly", () => {
    const mockScrollPositionChange = vi.fn()

    const { getByTestId } = render(
      <ScrollArea
        data-testid="ScrollArea"
        onScrollPositionChange={mockScrollPositionChange}
      >
        <Content />
      </ScrollArea>,
    )

    act(() =>
      fireEvent.scroll(getByTestId("ScrollArea"), {
        target: {
          scrollTop: 100,
        },
      }),
    )

    expect(mockScrollPositionChange).toHaveBeenCalledWith({ x: 0, y: 100 })
  })

  test("onMouseEnter and onMouseLeave work correctly", async () => {
    const { getByTestId } = render(
      <ScrollArea type="hover" data-testid="ScrollArea">
        <Content />
      </ScrollArea>,
    )

    const scrollArea = getByTestId("ScrollArea")

    await act(() => fireEvent.mouseEnter(scrollArea))
    expect(scrollArea).toHaveAttribute("data-hovered")

    await act(() => fireEvent.mouseLeave(scrollArea))

    await waitFor(
      () => {
        expect(scrollArea).not.toHaveAttribute("data-hovered")
      },
      { timeout: 2000 },
    )
  })

  test("never style is applied correctly", () => {
    const { getByTestId } = render(
      <ScrollArea type="never" data-testid="ScrollArea">
        <Content />
      </ScrollArea>,
    )

    const scrollArea = getByTestId("ScrollArea")

    expect(scrollArea).toHaveStyle({ scrollbarWidth: "none" })
  })

  test("renders with specific key for Safari", () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    const defaultPlatform = window.navigator.platform
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    const defaultVendor = window.navigator.vendor

    Object.defineProperty(window.navigator, "platform", {
      value: "MacOS",
      writable: true,
    })
    Object.defineProperty(window.navigator, "vendor", {
      value: "Apple Computer, Inc.",
      writable: true,
    })

    const { getByTestId } = render(
      <ScrollArea type="never" data-testid="ScrollArea">
        <Content />
      </ScrollArea>,
    )

    const scrollArea = getByTestId("ScrollArea")

    expect(scrollArea).toHaveAttribute("data-key", "false-false")

    Object.defineProperty(window.navigator, "platform", {
      value: defaultPlatform,
      writable: false,
    })
    Object.defineProperty(window.navigator, "vendor", {
      value: defaultVendor,
      writable: false,
    })
  })
})
