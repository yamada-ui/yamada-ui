import type { FC } from "react"
import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { ActionBar } from "."
import { Button } from "../button"
import { CloseButton } from "../close-button"

const TestComponent: FC<ActionBar.RootProps> = (props) => {
  return (
    <ActionBar.Root data-testid="root" {...props}>
      <ActionBar.OpenTrigger>
        <Button data-testid="openTrigger">Open ActionBar</Button>
      </ActionBar.OpenTrigger>

      <ActionBar.Content data-testid="content">
        <Button variant="outline" borderStyle="dashed">
          2 Selected
        </Button>
        <ActionBar.Separator data-testid="separator" />
        <ActionBar.CloseTrigger>
          <CloseButton size="md" data-testid="closeTrigger" />
        </ActionBar.CloseTrigger>
      </ActionBar.Content>
    </ActionBar.Root>
  )
}

describe("<ActionBar />", () => {
  test("renders component correctly", async () => {
    await a11y(<TestComponent />)
  })

  test("sets `displayName` correctly", () => {
    expect(ActionBar.Root.displayName).toBe("ActionBarRoot")
    expect(ActionBar.OpenTrigger.displayName).toBe("ActionBarOpenTrigger")
    expect(ActionBar.Content.displayName).toBe("ActionBarContent")
    expect(ActionBar.Separator.displayName).toBe("ActionBarSeparator")
    expect(ActionBar.CloseTrigger.displayName).toBe("ActionBarCloseTrigger")
  })

  test("sets `className` correctly", () => {
    render(<TestComponent open />)
    expect(screen.getByTestId("root")).toHaveClass("ui-action-bar__root")
    expect(screen.getByTestId("content")).toHaveClass("ui-action-bar__content")
    expect(screen.getByTestId("openTrigger")).toHaveClass(
      "ui-action-bar__trigger--open",
    )
    expect(screen.getByTestId("closeTrigger")).toHaveClass(
      "ui-action-bar__trigger--close",
    )
    expect(screen.getByTestId("separator")).toHaveClass(
      "ui-action-bar__separator",
    )
  })

  test("renders HTML tag correctly", () => {
    render(<TestComponent open />)
    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("content").tagName).toBe("SECTION")
    expect(screen.getByTestId("separator").tagName).toBe("DIV")
  })

  test("sets aria attributes correctly", () => {
    render(<TestComponent open />)
    expect(screen.getByTestId("openTrigger")).toHaveAttribute("aria-controls")
    expect(screen.getByTestId("openTrigger")).toHaveAttribute(
      "aria-expanded",
      "true",
    )
    expect(screen.getByTestId("openTrigger")).toHaveAttribute(
      "aria-haspopup",
      "dialog",
    )
    expect(screen.getByTestId("openTrigger")).toHaveAttribute(
      "aria-label",
      "Open action bar",
    )
    expect(screen.getByTestId("closeTrigger")).toHaveAttribute(
      "aria-label",
      "Close action bar",
    )
    expect(screen.getByTestId("content")).toHaveAttribute("role", "dialog")
    expect(screen.getByTestId("content")).toHaveAttribute("id")
  })

  test("opens action bar when open trigger is clicked", () => {
    render(<TestComponent />)
    expect(screen.queryByTestId("content")).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId("openTrigger"))
    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("closes action bar when close trigger is clicked", async () => {
    render(<TestComponent defaultOpen />)
    expect(screen.getByTestId("content")).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("closeTrigger"))
    await waitFor(() => {
      expect(screen.queryByTestId("content")).not.toBeInTheDocument()
    })
  })

  test("closes action bar when Escape key is pressed", () => {
    const onClose = vi.fn()
    render(<TestComponent open onClose={onClose} />)
    fireEvent.keyDown(document, { key: "Escape" })
    expect(onClose).toHaveBeenCalledOnce()
  })

  test("does not close action bar when Escape is pressed and `closeOnEsc` is false", () => {
    const onClose = vi.fn()
    render(<TestComponent closeOnEsc={false} open onClose={onClose} />)
    fireEvent.keyDown(document, { key: "Escape" })
    expect(onClose).not.toHaveBeenCalled()
  })

  test("does not close action bar when a non-Escape key is pressed", () => {
    const onClose = vi.fn()
    render(<TestComponent open onClose={onClose} />)
    fireEvent.keyDown(document, { key: "Enter" })
    expect(onClose).not.toHaveBeenCalled()
  })

  test("renders with shorthand `content` and `trigger` props", () => {
    render(
      <ActionBar.Root
        content={<p data-testid="shorthand-content">Content</p>}
        open
        trigger={<Button data-testid="shorthand-trigger">Open</Button>}
      />,
    )
    expect(screen.getByTestId("shorthand-trigger")).toBeInTheDocument()
    expect(screen.getByTestId("shorthand-content")).toBeInTheDocument()
  })

  test("calls onCloseComplete after exit animation", async () => {
    const onCloseComplete = vi.fn()
    const { rerender } = render(
      <TestComponent open onCloseComplete={onCloseComplete} />,
    )
    rerender(<TestComponent open={false} onCloseComplete={onCloseComplete} />)
    await waitFor(() => {
      expect(onCloseComplete).toHaveBeenCalledOnce()
    })
  })

  test("renders with `start` placement", () => {
    render(<TestComponent open placement="start-center" />)
    expect(screen.getByTestId("content")).toBeInTheDocument()
  })

  test("renders children as fallback when no `content` prop or ActionBar.Content", () => {
    render(
      <ActionBar.Root open>
        <p data-testid="fallback">Fallback children</p>
      </ActionBar.Root>,
    )
    expect(screen.getByTestId("fallback")).toBeInTheDocument()
  })

  test("sets `aria-expanded` to false and no `aria-controls` when closed", () => {
    render(<TestComponent />)
    expect(screen.getByTestId("openTrigger")).toHaveAttribute(
      "aria-expanded",
      "false",
    )
    expect(screen.getByTestId("openTrigger")).not.toHaveAttribute(
      "aria-controls",
    )
  })
})
