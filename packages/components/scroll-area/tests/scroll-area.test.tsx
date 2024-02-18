import { Text, VStack } from "@yamada-ui/react"
import { a11y, act, fireEvent, render } from "@yamada-ui/test"
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
        <Text>Item 1</Text>
      </ScrollArea>,
    )

    getByText("Item 1")
  })

  test("can control the scroll position", async () => {
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
          as: VStack,
          gap: "md",
        }}
      >
        <Content />
      </ScrollArea>,
    )

    const inner = container.querySelector(".ui-scroll-area__inner")

    expect(inner).toHaveStyle({
      gap: "var(--ui-spaces-md)",
    })

    expect(inner).toHaveClass("ui-stack")
    expect(inner).toHaveClass("ui-stack--vertical")

    rerender(
      <ScrollArea>
        <Content />
      </ScrollArea>,
    )

    expect(container.querySelector(".ui-scroll-area__inner")).toBeNull()
  })

  test("onScrollPositionChange works correctly", () => {
    const mockScrollPositionChange = jest.fn()

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
})
