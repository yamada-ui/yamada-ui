import type { FC } from "react"
import { a11y, page, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(<TestComponent open />)

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-action-bar__root")
    await expect
      .element(page.getByTestId("content"))
      .toHaveClass("ui-action-bar__content")
    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveClass("ui-action-bar__trigger--open")
    await expect
      .element(page.getByTestId("closeTrigger"))
      .toHaveClass("ui-action-bar__trigger--close")
    await expect
      .element(page.getByTestId("separator"))
      .toHaveClass("ui-action-bar__separator")
  })

  test("renders HTML tag correctly", async () => {
    await render(<TestComponent open />)

    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByTestId("content").element().tagName).toBe("SECTION")
    expect(page.getByTestId("separator").element().tagName).toBe("DIV")
  })

  test("sets aria attributes correctly", async () => {
    await render(<TestComponent open />)

    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-controls")
    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-expanded", "true")
    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-haspopup", "dialog")
    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-label", "Open action bar")
    await expect
      .element(page.getByTestId("closeTrigger"))
      .toHaveAttribute("aria-label", "Close action bar")
    await expect
      .element(page.getByTestId("content"))
      .toHaveAttribute("role", "dialog")
    await expect.element(page.getByTestId("content")).toHaveAttribute("id")
  })

  test("opens action bar when open trigger is clicked", async () => {
    const { user } = await render(<TestComponent />)

    expect(document.querySelector('[data-testid="content"]')).toBeNull()

    await user.click(page.getByTestId("openTrigger"))
    await expect.element(page.getByTestId("content")).toBeVisible()
  })

  test("closes action bar when close trigger is clicked", async () => {
    const { user } = await render(<TestComponent defaultOpen />)

    await expect.element(page.getByTestId("content")).toBeVisible()

    await user.click(page.getByTestId("closeTrigger"))

    await vi.waitFor(() => {
      expect(page.getByTestId("openTrigger").element()).toHaveAttribute(
        "aria-expanded",
        "false",
      )
    })
  })

  test("closes action bar when Escape key is pressed", async () => {
    const onClose = vi.fn()

    await render(<TestComponent open onClose={onClose} />)

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    )

    expect(onClose).toHaveBeenCalledOnce()
  })

  test("does not close action bar when Escape is pressed and `closeOnEsc` is false", async () => {
    const onClose = vi.fn()

    await render(<TestComponent closeOnEsc={false} open onClose={onClose} />)

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    )

    expect(onClose).not.toHaveBeenCalled()
  })

  test("does not close action bar when a non-Escape key is pressed", async () => {
    const onClose = vi.fn()

    await render(<TestComponent open onClose={onClose} />)

    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
    )

    expect(onClose).not.toHaveBeenCalled()
  })

  test("renders with shorthand `content` and `trigger` props", async () => {
    await render(
      <ActionBar.Root
        content={<p data-testid="shorthand-content">Content</p>}
        open
        trigger={<Button data-testid="shorthand-trigger">Open</Button>}
      />,
    )

    await expect.element(page.getByTestId("shorthand-trigger")).toBeVisible()
    await expect.element(page.getByTestId("shorthand-content")).toBeVisible()
  })

  test("calls onCloseComplete after exit animation", async () => {
    const onCloseComplete = vi.fn()
    const { rerender } = await render(
      <TestComponent open onCloseComplete={onCloseComplete} />,
    )

    rerender(<TestComponent open={false} onCloseComplete={onCloseComplete} />)

    await vi.waitFor(() => {
      expect(onCloseComplete).toHaveBeenCalledOnce()
    })
  })

  test("renders with `start` placement", async () => {
    await render(<TestComponent open placement="start-center" />)

    await expect.element(page.getByTestId("content")).toBeVisible()
  })

  test("renders children as fallback when no `content` prop or ActionBar.Content", async () => {
    await render(
      <ActionBar.Root open>
        <p data-testid="fallback">Fallback children</p>
      </ActionBar.Root>,
    )

    await expect.element(page.getByTestId("fallback")).toBeVisible()
  })

  test("sets `aria-expanded` to false and no `aria-controls` when closed", async () => {
    await render(<TestComponent />)

    await expect
      .element(page.getByTestId("openTrigger"))
      .toHaveAttribute("aria-expanded", "false")
    await expect
      .element(page.getByTestId("openTrigger"))
      .not.toHaveAttribute("aria-controls")
  })
})
