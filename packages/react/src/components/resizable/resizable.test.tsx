import type { ResizableRootControl } from "./"
import { a11y, page, render } from "#test/browser"
import { useRef } from "react"
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

  test("sets `className` correctly", async () => {
    await render(
      <Resizable.Root id="root">
        <Resizable.Item id="item">One</Resizable.Item>

        <Resizable.Trigger id="trigger" />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-resizable__root")
    await expect
      .element(
        page.getByTestId("item").element().firstElementChild as HTMLElement,
      )
      .toHaveClass("ui-resizable__item")
    await expect
      .element(page.getByTestId("trigger"))
      .toHaveClass("ui-resizable__trigger")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Resizable.Root id="root">
        <Resizable.Item id="item">One</Resizable.Item>

        <Resizable.Trigger id="trigger" />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByTestId("item").element().firstElementChild?.tagName).toBe(
      "DIV",
    )
    expect(page.getByTestId("trigger").element().tagName).toBe("DIV")
  })

  test.todo("The default size of the left panel should be 30 and 70", () => {
    render(
      <Resizable.Root>
        <Resizable.Item
          id="left-item"
          data-testid="left-item"
          defaultSize="30%"
        >
          One
        </Resizable.Item>

        <Resizable.Trigger />

        <Resizable.Item
          id="right-item"
          data-testid="right-item"
          defaultSize="70%"
        >
          Two
        </Resizable.Item>
      </Resizable.Root>,
    )
    expect(page.getByTestId("left-item").element()).toHaveStyle({
      flex: "30 1 0px",
    })
    expect(page.getByTestId("right-item").element()).toHaveStyle({
      flex: "70 1 0px",
    })
  })
})

describe("<ResizableTrigger />", () => {
  test("handles double-click to equalize panel sizes", async () => {
    const setLayoutMock = vi.fn()

    const Wrapper = () => {
      const controlRef = useRef<ResizableRootControl>(null)

      return (
        <>
          <button
            data-testid="mock-set-layout"
            onClick={() => {
              if (controlRef.current) {
                controlRef.current.setLayout = setLayoutMock
              }
            }}
          />

          <Resizable.Root controlRef={controlRef}>
            <Resizable.Item>One</Resizable.Item>

            <Resizable.Trigger id="trigger" />

            <Resizable.Item>Two</Resizable.Item>
          </Resizable.Root>
        </>
      )
    }

    await render(<Wrapper />)
    ;(page.getByTestId("mock-set-layout").element() as HTMLElement).click()

    const trigger = page.getByTestId("trigger").element()

    trigger.dispatchEvent(new MouseEvent("dblclick", { bubbles: true }))

    expect(setLayoutMock).toHaveBeenCalledWith(expect.objectContaining({}))
  })
})

describe("<ResizableTriggerIcon />", () => {
  test("icon renders correctly", async () => {
    await render(
      <Resizable.Root>
        <Resizable.Item>One</Resizable.Item>

        <Resizable.Trigger
          id="trigger"
          icon={<GripVerticalIcon data-testid="icon" />}
        />

        <Resizable.Item>Two</Resizable.Item>
      </Resizable.Root>,
    )
    await expect.element(page.getByTestId("trigger")).toBeInTheDocument()
    await expect.element(page.getByTestId("icon")).toBeInTheDocument()
  })
})
