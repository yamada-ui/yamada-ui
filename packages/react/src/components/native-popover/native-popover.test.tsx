import { a11y, fireEvent, render, screen } from "#test"
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
          <NativePopover.Header data-testid="header">
            Header
          </NativePopover.Header>
          <NativePopover.Body data-testid="body">
            Body content
          </NativePopover.Body>
          <NativePopover.Footer data-testid="footer">
            Footer
          </NativePopover.Footer>
        </NativePopover.Content>
      </NativePopover.Root>
    )
  }

  test("renders component correctly", async () => {
    await a11y(<Component />)
  })

  test("should render popover with proper ARIA attributes", () => {
    render(<Component />)

    const trigger = screen.getByTestId("trigger")
    const content = screen.getByTestId("content")

    expect(trigger).toHaveAttribute("aria-haspopup", "dialog")
    expect(trigger).toHaveAttribute("aria-controls")
    expect(trigger).toHaveAttribute("popovertarget")
    expect(trigger).toHaveAttribute("popovertargetaction", "toggle")
    expect(trigger).toHaveAttribute("role", "button")
    expect(trigger).toHaveAttribute("type", "button")

    expect(content).toHaveAttribute("role", "dialog")
    expect(content).toHaveAttribute("tabindex", "-1")
    expect(content).toHaveAttribute("data-popup", "")
    expect(content).toHaveAttribute("popover", "auto")
  })

  const ComponentWithAnchor = (props: NativePopover.RootProps) => {
    return (
      <NativePopover.Root {...props}>
        <NativePopover.Anchor data-testid="anchor">
          <Button>Anchor Button</Button>
        </NativePopover.Anchor>
        <NativePopover.Trigger data-testid="trigger">
          <Button>Open Popover</Button>
        </NativePopover.Trigger>
        <NativePopover.Content data-testid="content">
          <NativePopover.Header data-testid="header">
            Header
          </NativePopover.Header>
          <NativePopover.Body data-testid="body">
            Body content
          </NativePopover.Body>
          <NativePopover.Footer data-testid="footer">
            Footer
          </NativePopover.Footer>
        </NativePopover.Content>
      </NativePopover.Root>
    )
  }

  test("renders with anchor component", () => {
    render(<ComponentWithAnchor />)

    expect(screen.getByTestId("anchor")).toHaveClass(
      "ui-native-popover__anchor",
    )
    expect(screen.getByTestId("trigger")).toHaveClass(
      "ui-native-popover__trigger",
    )
    expect(screen.getByTestId("content")).toHaveClass(
      "ui-native-popover__content",
    )
  })

  test("should render with different popover modes", () => {
    const { rerender } = render(<Component popover="hint" />)

    expect(screen.getByTestId("content")).toHaveAttribute("popover", "hint")

    rerender(<Component popover="" />)
    expect(screen.getByTestId("content")).toHaveAttribute("popover", "")
  })

  test("should render custom close button when trigger is provided", () => {
    render(
      <NativePopover.Root>
        <NativePopover.Trigger>
          <Button>Open Popover</Button>
        </NativePopover.Trigger>
        <NativePopover.Content>
          <NativePopover.CloseTrigger data-testid="close-trigger">
            <Button>Close</Button>
          </NativePopover.CloseTrigger>
          <NativePopover.Body>Body content</NativePopover.Body>
        </NativePopover.Content>
      </NativePopover.Root>,
    )

    const closeTrigger = screen.getByTestId("close-trigger")
    expect(closeTrigger).toHaveAttribute("popovertargetaction", "hide")
    expect(closeTrigger).toHaveAttribute("popovertarget")
  })

  test("should prevent default and stop propagation when disabled", () => {
    render(<Component disabled />)

    const trigger = screen.getByTestId("trigger")

    expect(trigger).toHaveAttribute("aria-disabled", "true")

    const event = new MouseEvent("click", { bubbles: true, cancelable: true })
    const defaultPrevented = !fireEvent(trigger, event)

    expect(defaultPrevented).toBeTruthy()
  })
})
