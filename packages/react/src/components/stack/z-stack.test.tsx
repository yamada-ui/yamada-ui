import { page, render } from "#test/browser"
import { Box } from "../box"
import { ZStack } from "./z-stack"

describe("<ZStack />", () => {
  test("sets `displayName` correctly", () => {
    expect(ZStack.displayName).toBe("StackDepth")
  })

  test("sets `className` correctly", async () => {
    await render(
      <ZStack data-testid="z-stack">
        <Box>ZStack Item</Box>
      </ZStack>,
    )

    const zStack = page.getByTestId("z-stack")

    await expect.element(zStack).toHaveClass("ui-stack--depth")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <ZStack data-testid="z-stack">
        <Box>ZStack Item</Box>
      </ZStack>,
    )

    const zStack = page.getByTestId("z-stack")
    expect(zStack.element().tagName).toBe("DIV")
  })

  test("startIndex property works correctly", async () => {
    await render(
      <ZStack startIndex={10}>
        <Box>ZStack Item</Box>
      </ZStack>,
    )

    const zStack = page.getByText("ZStack Item")
    await expect.element(zStack).toHaveStyle({ zIndex: "10" })
  })

  test("Child elements are correctly overlaid and rendered", async () => {
    await render(
      <ZStack>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    const item1 = page.getByText("Item 1")
    const item2 = page.getByText("Item 2")

    await expect.element(item1).toHaveStyle({ position: "absolute" })
    await expect.element(item2).toHaveStyle({ position: "absolute" })
  })

  test("Whether the direction is working properly", async () => {
    await render(
      <ZStack direction="center-end">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    const item1 = page.getByText("Item 1")
    const item2 = page.getByText("Item 2")

    await expect.element(item1).toHaveStyle({
      position: "absolute",
      zIndex: "0",
    })
    await expect.element(item2).toHaveStyle({
      position: "absolute",
      zIndex: "1",
    })
  })

  test("Whether the reverse is working properly", async () => {
    await render(
      <ZStack reverse>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </ZStack>,
    )

    const item1 = page.getByText("Item 1")
    const item2 = page.getByText("Item 2")

    await expect.element(item1).toHaveStyle({
      position: "absolute",
      zIndex: "0",
    })
    await expect.element(item2).toHaveStyle({
      position: "absolute",
      zIndex: "1",
    })
  })

  test("applies correct styles with direction set to start", async () => {
    await render(
      <ZStack direction="start">
        <Box>Box 1</Box>
        <Box>Box 2</Box>
      </ZStack>,
    )

    const box1 = page.getByText("Box 1")
    const box2 = page.getByText("Box 2")

    await expect.element(box1).toHaveStyle({
      left: "0",
      position: "absolute",
      zIndex: "0",
    })
    await expect.element(box2).toHaveStyle({
      left: "0",
      position: "absolute",
      zIndex: "1",
    })
  })

  test("applies correct styles with direction set to center-start", async () => {
    await render(
      <ZStack direction="center-start">
        <Box>Box 1</Box>
        <Box>Box 2</Box>
      </ZStack>,
    )

    const box1 = page.getByText("Box 1")
    const box2 = page.getByText("Box 2")

    await expect.element(box1).toHaveStyle({
      position: "absolute",
      top: "0",
      zIndex: "0",
    })
    await expect.element(box2).toHaveStyle({
      position: "absolute",
      top: "0",
      zIndex: "1",
    })
  })
})
