import { a11y, render } from "@yamada-ui/test"
import { Resizable, ResizableItem, ResizableTrigger } from "../src"
import { assert } from "./utils"

describe("<Resizable />", () => {
  test.skip("Resizable renders correctly", async () => {
    const { container } = render(
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem>One</ResizableItem>

        <ResizableTrigger />

        <ResizableItem>Two</ResizableItem>
      </Resizable>,
    )

    await a11y(container)
  })

  test("The default size of the left panel should be 30 and 70", () => {
    const { container } = render(
      <Resizable borderWidth="1px" h="md" rounded="md">
        <ResizableItem id="left-item" defaultSize={30}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem id="right-item" defaultSize={70}>
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
