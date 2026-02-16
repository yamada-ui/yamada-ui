import { a11y, render, screen } from "#test"
import { GripVerticalIcon } from "../icon"
import { Resizable } from "./"

describe("<Resizable />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Resizable.Root>
        <Resizable.Item>One</Resizable.Item>
        <Resizable.Trigger />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Resizable.Root.displayName).toBe("ResizableRoot")
    expect(Resizable.Item.displayName).toBe("ResizableItem")
    expect(Resizable.Trigger.displayName).toBe("ResizableTrigger")
  })

  test("sets `className` correctly", () => {
    render(
      <Resizable.Root data-testid="root">
        <Resizable.Item id="item">One</Resizable.Item>

        <Resizable.Trigger id="trigger" />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    expect(screen.getByTestId("root")).toHaveClass("ui-resizable__root")
    expect(screen.getByTestId("item").firstChild).toHaveClass(
      "ui-resizable__item",
    )
    expect(screen.getByTestId("trigger")).toHaveClass("ui-resizable__trigger")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Resizable.Root data-testid="root">
        <Resizable.Item id="item">One</Resizable.Item>

        <Resizable.Trigger id="trigger" />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("item").firstElementChild?.tagName).toBe("DIV")
    expect(screen.getByTestId("trigger").tagName).toBe("DIV")
  })

  test.todo("The default size of the left panel should be 30 and 70", () => {
    render(
      <Resizable.Root>
        <Resizable.Item id="left-item" defaultSize="30%">
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item id="right-item" defaultSize="70%">
          Two
        </Resizable.Item>
      </Resizable.Root>,
    )
    expect(screen.getByTestId("left-item")).toHaveStyle({ flex: "30 1 0px" })
    expect(screen.getByTestId("right-item")).toHaveStyle({ flex: "70 1 0px" })
  })
})

describe("<ResizableTriggerIcon />", () => {
  test("icon renders correctly", () => {
    render(
      <Resizable.Root>
        <Resizable.Item>One</Resizable.Item>

        <Resizable.Trigger
          id="trigger"
          icon={<GripVerticalIcon data-testid="icon" />}
        />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    expect(screen.getByTestId("trigger")).toBeInTheDocument()
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })
})
