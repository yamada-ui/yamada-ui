import { a11y, fireEvent, render, screen } from "#test"
import { ScrollArea } from "."

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
})
