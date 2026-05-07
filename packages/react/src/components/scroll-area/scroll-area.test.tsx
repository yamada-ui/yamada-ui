import { a11y, fireEvent, render, renderHook, screen } from "#test"
import { ScrollArea } from "."
import { useScrollArea } from "./use-scroll-area"

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

    scrollArea.scrollTop = 100
    fireEvent.scroll(scrollArea)

    expect(() => unmount()).not.toThrow()
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

    const { result } = renderHook(() =>
      useScrollArea({
        className: "rest-class",
        style: { color: "tomato" },
        onMouseEnter: restOnMouseEnter,
        onMouseLeave: restOnMouseLeave,
        onScroll: restOnScroll,
        onScrollPositionChange,
      }),
    )

    const rootProps = result.current.getRootProps({
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

    render(<div data-testid="scroll-area" {...rootProps} />)

    const scrollArea = screen.getByTestId("scroll-area")

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
})
