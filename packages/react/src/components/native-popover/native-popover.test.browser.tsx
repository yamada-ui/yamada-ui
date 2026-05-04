import { a11y, page, render } from "#test/browser"
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

    await expect
      .element(page.getByTestId("trigger"))
      .toHaveClass("ui-native-popover__trigger")
    await expect
      .element(page.getByTestId("content"))
      .toHaveClass("ui-native-popover__content")
    await expect
      .element(page.getByTestId("header"))
      .toHaveClass("ui-native-popover__header")
    await expect
      .element(page.getByTestId("body"))
      .toHaveClass("ui-native-popover__body")
    await expect
      .element(page.getByTestId("footer"))
      .toHaveClass("ui-native-popover__footer")
  })

  test("should render popover with proper ARIA attributes", async () => {
    await render(<Component />)

    const trigger = page.getByTestId("trigger")
    const content = page.getByTestId("content")

    await expect.element(trigger).toHaveAttribute("aria-haspopup", "dialog")
    await expect.element(trigger).toHaveAttribute("aria-controls")
    await expect.element(trigger).toHaveAttribute("popoverTarget")
    await expect
      .element(trigger)
      .toHaveAttribute("popoverTargetAction", "toggle")
    await expect.element(trigger).toHaveAttribute("role", "button")
    await expect.element(trigger).toHaveAttribute("type", "button")

    await expect.element(content).toHaveAttribute("role", "dialog")
    await expect.element(content).toHaveAttribute("tabIndex", "-1")
    await expect.element(content).toHaveAttribute("data-popup", "")
    await expect.element(content).toHaveAttribute("popover", "auto")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Component />)
    const header = page.getByTestId("header").element()
    const body = page.getByTestId("body").element()
    const footer = page.getByTestId("footer").element()
    const content = page.getByTestId("content").element()
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

    await expect
      .element(page.getByTestId("anchor"))
      .toHaveClass("ui-native-popover__anchor")
    await expect
      .element(page.getByTestId("trigger"))
      .toHaveClass("ui-native-popover__trigger")
    await expect
      .element(page.getByTestId("content"))
      .toHaveClass("ui-native-popover__content")
  })

  test("should render with custom popover props", async () => {
    await render(<Component popover="manual" popoverTargetAction="show" />)

    await expect
      .element(page.getByTestId("trigger"))
      .toHaveAttribute("popoverTargetAction", "show")
    await expect
      .element(page.getByTestId("content"))
      .toHaveAttribute("popover", "manual")
  })

  test("should render with different popover modes", async () => {
    const { rerender } = await render(<Component popover="hint" />)

    const content = page.getByTestId("content")
    await expect.element(content).toHaveAttribute("popover", "hint")

    await rerender(<Component popover="" />)
    await expect.element(content).toHaveAttribute("popover", "")
  })

  test("should render with different popover target actions", async () => {
    const { rerender } = await render(<Component popoverTargetAction="show" />)

    const trigger = page.getByTestId("trigger")
    await expect.element(trigger).toHaveAttribute("popoverTargetAction", "show")

    await rerender(<Component popoverTargetAction="hide" />)
    await expect.element(trigger).toHaveAttribute("popoverTargetAction", "hide")
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

    const closeTrigger = page.getByTestId("close-trigger")
    await expect
      .element(closeTrigger)
      .toHaveAttribute("popovertargetaction", "hide")
    await expect.element(closeTrigger).toHaveAttribute("popovertarget")
  })

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
