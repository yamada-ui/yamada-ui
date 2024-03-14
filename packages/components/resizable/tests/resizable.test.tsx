import { act } from "@testing-library/react"
import { Center } from "@yamada-ui/react"
import { a11y, render } from "@yamada-ui/test"
import type { RenderReturn } from "@yamada-ui/test"
import { createRef } from "react"
import type { ResizableItemControl } from "../src"
import {
  Resizable,
  ResizableItem,
  ResizableTrigger,
  ResizableTriggerIcon,
} from "../src"
import { assert } from "./utils"

describe.skip("<Resizable />", () => {
  test("Resizable renders correctly", async () => {
    const { container } = render(
      <Resizable h="md" rounded="md" borderWidth="1px">
        <ResizableItem id="left-item" as={Center}>
          One
        </ResizableItem>

        <ResizableTrigger />

        <ResizableItem id="right-item" as={Center}>
          Two
        </ResizableItem>
      </Resizable>,
    )

    await a11y(container)
  })

  describe("Change Direction", () => {
    // TODO: Add tests
  })

  describe("Set Default Values", () => {
    test("The default size of the left panel should be 30", () => {
      const { container } = render(
        <Resizable h="md" rounded="md" borderWidth="1px">
          <ResizableItem id="left-item" as={Center} defaultSize={30}>
            One
          </ResizableItem>

          <ResizableTrigger />

          <ResizableItem id="right-item" as={Center}>
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

  describe("Set Minimum and Maximum Values", () => {
    const controlRef = createRef<ResizableItemControl>()
    let renderResult: RenderReturn
    let container: HTMLElement

    beforeEach(() => {
      renderResult = render(
        <Resizable h="md" rounded="md" borderWidth="1px">
          <ResizableItem
            id="left-item"
            as={Center}
            minSize={30}
            maxSize={70}
            defaultSize={45}
            controlRef={controlRef}
          >
            One
          </ResizableItem>

          <ResizableTrigger />

          <ResizableItem id="right-item" as={Center}>
            Two
          </ResizableItem>
        </Resizable>,
      )

      container = renderResult.container
    })

    afterEach(() => {
      renderResult.unmount()
    })

    test.each`
      size  | expected
      ${20} | ${30}
      ${29} | ${30}
      ${30} | ${30}
      ${50} | ${50}
      ${69} | ${69}
      ${70} | ${70}
      ${80} | ${70}
    `(
      "When .resize($size) executed, the size of left panel should be $expected",
      ({ size, expected }) => {
        const leftItem = container.querySelector("#left-item")
        const rightItem = container.querySelector("#right-item")

        assert(leftItem, "data-panel-id=`left-item` is not found")
        assert(rightItem, "data-panel-id=`right-item` is not found")

        expect(leftItem.getAttribute("data-panel-size")).toBe("45.0")
        expect(rightItem.getAttribute("data-panel-size")).toBe("55.0")

        act(() => {
          controlRef.current?.resize(size)
        })

        expect(leftItem.getAttribute("data-panel-size")).toBe(`${expected}.0`)
        expect(rightItem.getAttribute("data-panel-size")).toBe(
          `${100 - expected}.0`,
        )
      },
    )
  })

  describe("Set Keyboard Step Values", () => {
    // TODO: Add tests
  })

  describe("Save Values", () => {
    // TODO: Add tests
  })

  describe("Set Values to cookies", () => {
    // TODO: Add tests
  })

  describe("Enable Collapsing", () => {
    test("When `collapesible = true`, function `onCollapse` should be called", () => {
      const controlRef = createRef<ResizableItemControl>()

      const onCollapse = vi.fn()

      const { container } = render(
        <Resizable h="md" rounded="md" borderWidth="1px">
          <ResizableItem
            id="left-item"
            as={Center}
            collapsedSize={10}
            collapsible
            defaultSize={20}
            minSize={20}
            maxSize={30}
            controlRef={controlRef}
            onCollapse={onCollapse}
          >
            One
          </ResizableItem>

          <ResizableTrigger />

          <ResizableItem id="right-item" as={Center}>
            Two
          </ResizableItem>
        </Resizable>,
      )

      const leftItem = container.querySelector("#left-item")
      const rightItem = container.querySelector("#right-item")

      assert(leftItem, "data-panel-id=`left-item` is not found")
      assert(rightItem, "data-panel-id=`right-item` is not found")

      expect(leftItem.getAttribute("data-panel-size")).toBe("20.0")
      expect(rightItem.getAttribute("data-panel-size")).toBe("80.0")

      act(() => {
        controlRef.current?.collapse()
      })

      expect(leftItem.getAttribute("data-panel-size")).toBe("10.0")
      expect(rightItem.getAttribute("data-panel-size")).toBe("90.0")

      expect(onCollapse).toHaveBeenCalled()
      expect(onCollapse).toHaveBeenCalledTimes(1)
    })

    test("When `collapsible = false`, function `onCollapse` should not be called", () => {
      const controlRef = createRef<ResizableItemControl>()

      const onCollapse = vi.fn()

      const { container } = render(
        <Resizable h="md" rounded="md" borderWidth="1px">
          <ResizableItem
            id="left-item"
            as={Center}
            collapsedSize={10}
            collapsible={false}
            defaultSize={20}
            minSize={20}
            maxSize={30}
            controlRef={controlRef}
          >
            One
          </ResizableItem>

          <ResizableTrigger />

          <ResizableItem id="right-item" as={Center}>
            Two
          </ResizableItem>
        </Resizable>,
      )

      const leftItem = container.querySelector("#left-item")
      const rightItem = container.querySelector("#right-item")

      assert(leftItem, "data-panel-id=`left-item` is not found")
      assert(rightItem, "data-panel-id=`right-item` is not found")

      expect(leftItem.getAttribute("data-panel-size")).toBe("20.0")
      expect(rightItem.getAttribute("data-panel-size")).toBe("80.0")

      act(() => {
        controlRef.current?.collapse()
      })

      expect(leftItem.getAttribute("data-panel-size")).toBe("20.0")
      expect(rightItem.getAttribute("data-panel-size")).toBe("80.0")

      expect(onCollapse).not.toHaveBeenCalled()
    })
  })

  describe("Add Icons", () => {
    // TODO: Add tests
  })

  describe("Customize Icons", () => {
    // TODO: Add tests
  })

  describe("Nested Structure", () => {
    // TODO: Add tests
  })

  describe("Disable", () => {
    // TODO: Add tests
  })

  describe("Handle Resize Events", () => {
    test("When Resize Event is occured, `onResize` function should be called", () => {
      const onResize = vi.fn()

      const { container } = render(
        <Resizable h="md" rounded="md" borderWidth="1px">
          <ResizableItem id="left-item" as={Center} onResize={onResize}>
            One
          </ResizableItem>

          <ResizableTrigger />

          <ResizableItem id="right-item" as={Center}>
            Two
          </ResizableItem>
        </Resizable>,
      )

      const leftItem = container.querySelector("#left-item")
      const rightItem = container.querySelector("#right-item")

      assert(leftItem, "data-panel-id=`left-item` is not found")
      assert(rightItem, "data-panel-id=`right-item` is not found")

      expect(onResize).toHaveBeenCalled()
      expect(onResize).toHaveBeenCalledTimes(1)
    })
  })

  describe("Control", () => {
    // TODO: Add tests
  })
})

describe("<Resizable />", () => {
  test("applies styles `width` and `height` correctly", async () => {
    const { getByTestId } = render(
      <ResizableTriggerIcon data-testid="resizable" />,
    )

    expect(getByTestId("resizable")).toHaveStyle("width: 0.5rem")
    expect(getByTestId("resizable")).toHaveStyle("height: 1rem")
  })
})
