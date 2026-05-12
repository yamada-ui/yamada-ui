import type { ResizableRootControl } from "./"
import { useRef } from "react"
import { page, render } from "#test/browser"
import { Resizable } from "./"

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
          >
            mock
          </button>

          <Resizable.Root controlRef={controlRef}>
            <Resizable.Item>One</Resizable.Item>

            <Resizable.Trigger id="trigger" />

            <Resizable.Item>Two</Resizable.Item>
          </Resizable.Root>
        </>
      )
    }

    const { user } = await render(<Wrapper />)
    await user.click(page.getByTestId("mock-set-layout"))
    await user.dblClick(page.getByTestId("trigger"))

    expect(setLayoutMock).toHaveBeenCalledWith(expect.objectContaining({}))
  })
})
