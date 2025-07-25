import { a11y, render, screen } from "#test"
import { GripVerticalIcon } from "../icon"
import { Resizable } from "./"

function assert(
  expectedCondition: any,
  message: string,
): asserts expectedCondition {
  if (!expectedCondition) {
    console.error(message)
    throw new Error(message)
  }
}

describe("<Resizable />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Resizable.Root>
        <Resizable.Item>One</Resizable.Item>
        <Resizable.Trigger
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={50}
        />

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
        <Resizable.Item data-testid="item">One</Resizable.Item>

        <Resizable.Trigger data-testid="trigger" />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    expect(screen.getByTestId("root")).toHaveClass("ui-resizable__root")
    expect(screen.getByTestId("item")).toHaveClass("ui-resizable__item")
    expect(screen.getByTestId("trigger")).toHaveClass("ui-resizable__trigger")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Resizable.Root data-testid="root">
        <Resizable.Item data-testid="item">One</Resizable.Item>

        <Resizable.Trigger data-testid="trigger" />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("item").tagName).toBe("DIV")
    expect(screen.getByTestId("trigger").tagName).toBe("DIV")
  })

  test("The default size of the left panel should be 30 and 70", () => {
    const { container } = render(
      <Resizable.Root>
        <Resizable.Item id="left-item" defaultSize={30}>
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item id="right-item" defaultSize={70}>
          Two
        </Resizable.Item>
      </Resizable.Root>,
    )
    const leftItem = container.querySelector("#left-item")
    const rightItem = container.querySelector("#right-item")
    assert(leftItem, "data-panel-id=`left-item` is not found")
    assert(rightItem, "data-panel-id=`right-item` is not found")
    expect(leftItem.getAttribute("data-panel-id")).toBe("left-item")
    expect(rightItem.getAttribute("data-panel-id")).toBe("right-item")
    expect(leftItem.getAttribute("data-panel-size")).toBe("30.0")
    expect(rightItem.getAttribute("data-panel-size")).toBe("70.0")
  })
})

describe("<ResizableTriggerIcon />", () => {
  test("icon renders correctly", () => {
    const { getByTestId } = render(
      <Resizable.Root>
        <Resizable.Item defaultSize={50}>One</Resizable.Item>

        <Resizable.Trigger
          data-testid="resizable"
          icon={<GripVerticalIcon data-testid="resizable-icon" />}
        />

        <Resizable.Item defaultSize={50}>Two</Resizable.Item>
      </Resizable.Root>,
    )

    expect(getByTestId("resizable")).toBeInTheDocument()
    expect(getByTestId("resizable-icon")).toBeInTheDocument()
  })
})
