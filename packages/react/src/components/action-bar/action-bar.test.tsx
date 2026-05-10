import type { FC, Ref } from "react"
import { a11y, render, renderHook, screen } from "#test"
import { ActionBar } from "."
import { Button } from "../button"
import { CloseButton } from "../close-button"
import { useActionBar } from "./use-action-bar"

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

function invokeCallbackRef<T>(ref: Ref<T> | undefined, node: null | T) {
  if (typeof ref === "function") ref(node)
}

function invokeHandler<E>(handler: ((event: E) => void) | undefined, event: E) {
  handler?.(event)
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

  describe("useActionBar", () => {
    test("merges hook rest with user props via mergeProps in getRootProps", () => {
      const hookRef = vi.fn()
      const userRef = vi.fn()
      const callOrder: string[] = []
      const hookOnClick = vi.fn(() => {
        callOrder.push("hook")
      })
      const userOnClick = vi.fn(() => {
        callOrder.push("user")
      })
      const { result } = renderHook(() =>
        useActionBar({
          id: "hook-id",
          ref: hookRef,
          className: "hook",
          style: { color: "red" },
          "data-testid": "bar-root",
          onClick: hookOnClick,
        }),
      )

      const merged = result.current.getRootProps({
        id: "user-id",
        ref: userRef,
        className: "user",
        style: { backgroundColor: "blue" },
        onClick: userOnClick,
      })

      expect(merged.id).toBe("user-id")
      expect(String(merged.className)).toContain("hook")
      expect(String(merged.className)).toContain("user")
      expect(merged["data-testid"]).toBe("bar-root")
      expect(merged.style).toMatchObject({
        backgroundColor: "blue",
        color: "red",
      })

      const element = document.createElement("div")
      expect(typeof merged.ref).toBe("function")
      invokeCallbackRef(merged.ref, element)

      expect(hookRef).toHaveBeenCalledWith(element)
      expect(userRef).toHaveBeenCalledWith(element)

      const event = new MouseEvent("click")
      invokeHandler(merged.onClick, event as never)

      expect(hookOnClick).toHaveBeenCalledWith(event)
      expect(userOnClick).toHaveBeenCalledWith(event)
      expect(callOrder).toStrictEqual(["hook", "user"])
    })
  })
})
