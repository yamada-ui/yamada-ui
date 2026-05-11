import type { FC } from "react"
import { a11y, render, screen } from "#test"
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
})
