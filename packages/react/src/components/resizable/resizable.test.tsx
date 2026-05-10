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
      <Resizable.Root id="root">
        <Resizable.Item id="item">One</Resizable.Item>

        <Resizable.Trigger id="trigger" />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )

    const item = screen.getByText("One").closest(".ui-resizable__item")

    expect(screen.getByTestId("root")).toHaveClass("ui-resizable__root")
    expect(item).toBeInTheDocument()
    expect(item).toHaveClass("ui-resizable__item")
    expect(screen.getByTestId("trigger")).toHaveClass("ui-resizable__trigger")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Resizable.Root id="root">
        <Resizable.Item id="item">One</Resizable.Item>

        <Resizable.Trigger id="trigger" />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )

    const item = screen.getByText("One").closest(".ui-resizable__item")

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(item?.tagName).toBe("DIV")
    expect(screen.getByTestId("trigger").tagName).toBe("DIV")
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
