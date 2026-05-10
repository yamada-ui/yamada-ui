import { a11y, render, screen } from "#test"
import { Box } from "../box"
import { ZStack } from "./z-stack"

describe("<ZStack />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <ZStack>
        <Box>ZStack Item</Box>
      </ZStack>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(ZStack.displayName).toBe("StackDepth")
  })

  test("sets `className` correctly", () => {
    render(
      <ZStack data-testid="z-stack">
        <Box>ZStack Item</Box>
      </ZStack>,
    )

    expect(screen.getByTestId("z-stack")).toHaveClass("ui-stack--depth")
  })

  test("renders HTML tag correctly", () => {
    render(
      <ZStack data-testid="z-stack">
        <Box>ZStack Item</Box>
      </ZStack>,
    )

    expect(screen.getByTestId("z-stack").tagName).toBe("DIV")
  })

  test("startIndex sets initial zIndex", () => {
    render(
      <ZStack startIndex={10}>
        <Box>ZStack Item</Box>
      </ZStack>,
    )

    expect(screen.getByText("ZStack Item")).toHaveStyle({ zIndex: "10" })
  })

  test("overlays children with absolute position", () => {
    render(
      <ZStack>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    expect(screen.getByText("Item 1")).toHaveStyle({ position: "absolute" })
    expect(screen.getByText("Item 2")).toHaveStyle({ position: "absolute" })
  })

  test.each([
    ["end", { position: "absolute", zIndex: "0" }, { zIndex: "1" }],
    ["center-end", { position: "absolute", zIndex: "0" }, { zIndex: "1" }],
    ["start", { left: "0", zIndex: "0" }, { left: "0", zIndex: "1" }],
    ["center-start", { top: "0", zIndex: "0" }, { top: "0", zIndex: "1" }],
    ["start-center", { zIndex: "0" }, { zIndex: "1" }],
    ["end-center", { zIndex: "0" }, { zIndex: "1" }],
  ] as const)(
    "applies correct styles with direction %s",
    (direction, first, second) => {
      render(
        <ZStack direction={direction}>
          <Box>Item 1</Box>
          <Box>Item 2</Box>
        </ZStack>,
      )

      expect(screen.getByText("Item 1")).toHaveStyle(first)
      expect(screen.getByText("Item 2")).toHaveStyle(second)
    },
  )

  test("reverse swaps direction", () => {
    render(
      <ZStack reverse>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    expect(screen.getByText("Item 1")).toHaveStyle({
      position: "absolute",
      zIndex: "0",
    })
    expect(screen.getByText("Item 2")).toHaveStyle({
      position: "absolute",
      zIndex: "1",
    })
  })

  test("fit=false omits min size", () => {
    render(
      <ZStack data-testid="z-stack" fit={false}>
        <Box>Item</Box>
      </ZStack>,
    )

    const zStack = screen.getByTestId("z-stack")

    expect(zStack).not.toHaveStyle({ minHeight: "0px" })
    expect(zStack).not.toHaveStyle({ minWidth: "0px" })
  })

  test("reverse with start direction swaps offset axis", () => {
    render(
      <ZStack direction="start" reverse>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    const item1 = screen.getByText("Item 1")
    const item2 = screen.getByText("Item 2")

    expect(item1).toHaveStyle({
      right: "0",
      top: "calc(var(--space) * 0)",
      zIndex: "0",
    })
    expect(item2).toHaveStyle({ right: "0", zIndex: "1" })
  })

  test("reverse with center-start direction swaps offset axis", () => {
    render(
      <ZStack direction="center-start" reverse>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    const item1 = screen.getByText("Item 1")
    const item2 = screen.getByText("Item 2")

    expect(item1).toHaveStyle({
      bottom: "0",
      left: "calc(var(--space) * 0)",
      zIndex: "0",
    })
    expect(item2).toHaveStyle({
      left: "calc(var(--space) * 1)",
      zIndex: "1",
    })
  })
})
