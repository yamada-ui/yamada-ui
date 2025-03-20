import { a11y, render } from "../../../test"
import { GripVerticalIcon } from "../icon"
import { Resizable } from "./"

export function assert(
  expectedCondition: any,
  message: string,
): asserts expectedCondition {
  if (!expectedCondition) {
    console.error(message)
    throw new Error(message)
  }
}

describe("<Resizable />", () => {
  test.skip("Resizable renders correctly", async () => {
    const { container } = render(
      <Resizable.Root borderWidth="1px" h="md" rounded="md">
        <Resizable.Item>One</Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )

    await a11y(container)
  })

  test("The default size of the left panel should be 30 and 70", () => {
    const { container } = render(
      <Resizable.Root borderWidth="1px" h="md" rounded="md">
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
