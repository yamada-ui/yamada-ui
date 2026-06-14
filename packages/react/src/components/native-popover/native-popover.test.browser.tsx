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

  test("should not open popover when disabled", async () => {
    const { user } = await render(<Component disabled />)

    const trigger = page.getByTestId("trigger")
    const content = page.getByTestId("content")

    await expect.element(trigger).toHaveAttribute("aria-disabled", "true")
    await expect.element(content).not.toBeVisible()

    await expect(user.click(trigger, { timeout: 200 })).rejects.toThrow(
      /Timeout/,
    )
    await expect.element(content).not.toBeVisible()
  })
})
