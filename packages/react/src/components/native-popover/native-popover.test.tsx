import { a11y, render } from "#test/browser"
import { fireEvent, screen } from "@testing-library/react"
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

  test("sets `displayName` correctly", () => {
    expect(NativePopover.Root.name).toBe("NativePopoverRoot")
    expect(NativePopover.Trigger.displayName).toBe("NativePopoverTrigger")
    expect(NativePopover.Content.displayName).toBe("NativePopoverContent")
    expect(NativePopover.Header.displayName).toBe("NativePopoverHeader")
    expect(NativePopover.Body.displayName).toBe("NativePopoverBody")
    expect(NativePopover.Footer.displayName).toBe("NativePopoverFooter")
    expect(NativePopover.Anchor.displayName).toBe("NativePopoverAnchor")
    expect(NativePopover.CloseTrigger.name).toBe("NativePopoverCloseTrigger")
  })

  test("sets `className` correctly", async () => {
    await render(<Component />)

    expect(screen.getByTestId("trigger")).toHaveClass(
      "ui-native-popover__trigger",
    )
    expect(screen.getByTestId("content")).toHaveClass(
      "ui-native-popover__content",
    )
    expect(screen.getByTestId("header")).toHaveClass(
      "ui-native-popover__header",
    )
    expect(screen.getByTestId("body")).toHaveClass("ui-native-popover__body")
    expect(screen.getByTestId("footer")).toHaveClass(
      "ui-native-popover__footer",
    )
  })

  test("should render popover with proper ARIA attributes", async () => {
    await render(<Component />)

    const trigger = screen.getByTestId("trigger")
    const content = screen.getByTestId("content")

    expect(trigger).toHaveAttribute("aria-haspopup", "dialog")
    expect(trigger).toHaveAttribute("aria-controls")
    expect(trigger).toHaveAttribute("popoverTarget")
    expect(trigger).toHaveAttribute("popoverTargetAction", "toggle")
    expect(trigger).toHaveAttribute("role", "button")
    expect(trigger).toHaveAttribute("type", "button")

    expect(content).toHaveAttribute("role", "dialog")
    expect(content).toHaveAttribute("tabIndex", "-1")
    expect(content).toHaveAttribute("data-popup", "")
    expect(content).toHaveAttribute("popover", "auto")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Component />)
    const header = screen.getByTestId("header")
    const body = screen.getByTestId("body")
    const footer = screen.getByTestId("footer")
    const content = screen.getByTestId("content")
    const positioner = content.parentElement

    expect(header.tagName).toBe("DIV")
    expect(body.tagName).toBe("DIV")
    expect(footer.tagName).toBe("DIV")
    expect(content.tagName).toBe("DIV")
    expect(positioner?.tagName).toBe("DIV")
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

  test("renders with anchor component", async () => {
    await render(<ComponentWithAnchor />)

    const anchor = screen.getByTestId("anchor")
    const trigger = screen.getByTestId("trigger")
    const content = screen.getByTestId("content")

    expect(anchor).toHaveClass("ui-native-popover__anchor")
    expect(trigger).toHaveClass("ui-native-popover__trigger")
    expect(content).toHaveClass("ui-native-popover__content")
  })

  test("should render with custom popover props", async () => {
    await render(<Component popover="manual" popoverTargetAction="show" />)

    const trigger = screen.getByTestId("trigger")
    const content = screen.getByTestId("content")

    expect(trigger).toHaveAttribute("popoverTargetAction", "show")
    expect(content).toHaveAttribute("popover", "manual")
  })

  test("should render with different popover modes", async () => {
    await render(<Component popover="hint" />)

    expect(screen.getByTestId("content")).toHaveAttribute("popover", "hint")

    await render(<Component popover="" />)

    const contents = screen.getAllByTestId("content")

    expect(contents.at(-1)).toHaveAttribute("popover", "")
  })

  test("should render with different popover target actions", async () => {
    await render(<Component popoverTargetAction="show" />)

    expect(screen.getByTestId("trigger")).toHaveAttribute(
      "popoverTargetAction",
      "show",
    )

    await render(<Component popoverTargetAction="hide" />)

    const triggers = screen.getAllByTestId("trigger")

    expect(triggers.at(-1)).toHaveAttribute("popoverTargetAction", "hide")
  })

  test("should render custom close button when trigger is provided", async () => {
    await render(
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

  test("should prevent default and stop propagation when disabled", async () => {
    await render(<Component disabled />)

    const trigger = screen.getByTestId("trigger")

    expect(trigger).toHaveAttribute("aria-disabled", "true")

    const defaultPrevented = !fireEvent.click(trigger)

    expect(defaultPrevented).toBeTruthy()
  })
})
