import { Center } from "@yamada-ui/react"
import { a11y, render } from "@yamada-ui/test"
import {
  Resizable,
  ResizableItem,
  ResizableTrigger,
  ResizableTriggerIcon,
} from "../src"
import { assert } from "./utils"

describe("<Resizable />", () => {
  test.skip("Resizable renders correctly", async () => {
    const { container } = render(
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem as={Center}>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem as={Center}>Two</ResizableItem>
      </Resizable>,
    )

    await a11y(container)
  })

  test("The default size of the left panel should be 30 and 70", () => {
    const { container } = render(
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem id="left-item" as={Center} defaultSize={30}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem id="right-item" as={Center} defaultSize={70}>
          Two
        </ResizableItem>
      </Resizable>,
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
  test("applies styles `width` and `height` correctly", async () => {
    const { getByTestId } = render(
      <ResizableTriggerIcon data-testid="resizable" />,
    )

    expect(getByTestId("resizable")).toHaveStyle("width: 0.5rem")
    expect(getByTestId("resizable")).toHaveStyle("height: 1rem")
  })

  test("icon renders correctly", async () => {
    const { getByTestId } = render(
      <Resizable>
        <ResizableItem as={Center} defaultSize={50}>
          One
        </ResizableItem>

        <ResizableTrigger
          data-testid="resizable"
          icon={<ResizableTriggerIcon />}
        />

        <ResizableItem as={Center} defaultSize={50}>
          Two
        </ResizableItem>
      </Resizable>,
    )

    expect(
      getByTestId("resizable").querySelector(".ui-resizable__trigger-icon"),
    ).toBeInTheDocument()
  })
})
