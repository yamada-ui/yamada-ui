import { page, render } from "#test/browser"
import { NativePopover } from "."
import { Button } from "../button"

describe("<NativePopover />", () => {
  const Component = (props: NativePopover.RootProps) => {
    return (
      <NativePopover.Root {...props}>
        <NativePopover.Trigger data-testid="trigger">
          <Button>Open Popover</Button>
        </NativePopover.Trigger>
        <NativePopover.Content data-testid="content">
          <NativePopover.Body>Body content</NativePopover.Body>
        </NativePopover.Content>
      </NativePopover.Root>
    )
  }

  test("should prevent default and stop propagation when disabled", async () => {
    await render(<Component disabled />)

    const trigger = page.getByTestId("trigger")
    await expect.element(trigger).toHaveAttribute("aria-disabled", "true")

    const defaultPrevented = !trigger
      .element()
      .dispatchEvent(
        new MouseEvent("click", { bubbles: true, cancelable: true }),
      )

    expect(defaultPrevented).toBeTruthy()
  })
})
