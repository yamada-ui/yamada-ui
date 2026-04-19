import { a11y, page, render, renderHook } from "#test/browser"
import { Popover } from "."
import { Button } from "../button"
import { usePopupAnimationProps } from "./popover"

describe("<Popover />", () => {
  const Component = (props: Popover.RootProps) => {
    return (
      <Popover.Root {...props}>
        <Popover.Trigger>
          <Button>Popover Trigger</Button>
        </Popover.Trigger>

        <Popover.Content data-testid="popoverContent">
          <Popover.Header>Popover Header</Popover.Header>
          <Popover.Body>Popover Body</Popover.Body>
          <Popover.Footer>Popover Footer</Popover.Footer>
        </Popover.Content>
      </Popover.Root>
    )
  }

  const ComponentWithAnchor = (props: Popover.RootProps) => {
    return (
      <Popover.Root {...props}>
        <Popover.Anchor>
          <Button>Popover Anchor</Button>
        </Popover.Anchor>

        <Popover.Trigger>
          <Button>Popover Trigger</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>Popover Header</Popover.Header>
          <Popover.Body>Popover Body</Popover.Body>
          <Popover.Footer>Popover Footer</Popover.Footer>
        </Popover.Content>
      </Popover.Root>
    )
  }

  const ComponentWithCloseTrigger = (props: Popover.RootProps) => {
    return (
      <Popover.Root {...props}>
        <Popover.Trigger>
          <Button>Popover Trigger</Button>
        </Popover.Trigger>

        <Popover.Content>
          <Popover.Header>Popover Header</Popover.Header>
          <Popover.Body>Popover Body</Popover.Body>
          <Popover.Footer>
            <Popover.CloseTrigger>
              <Button>Close</Button>
            </Popover.CloseTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Root>
    )
  }

  test("renders component correctly", async () => {
    await a11y(<Component defaultOpen />)
  })

  test("sets `displayName` correctly", () => {
    expect(Popover.Root.name).toBe("PopoverRoot")
    expect(Popover.Trigger.displayName).toBe("PopoverTrigger")
    expect(Popover.CloseTrigger.displayName).toBe("PopoverCloseTrigger")
    expect(Popover.Anchor.displayName).toBe("PopoverAnchor")
    expect(Popover.Content.displayName).toBe("PopoverContent")
    expect(Popover.Header.displayName).toBe("PopoverHeader")
    expect(Popover.Body.displayName).toBe("PopoverBody")
    expect(Popover.Footer.displayName).toBe("PopoverFooter")
  })

  test("sets `className` correctly", async () => {
    await render(<ComponentWithAnchor defaultOpen />)
    const trigger = page.getByText("Popover Trigger").element()
    const anchor = page.getByText("Popover Anchor").element()
    const header = page.getByText("Popover Header").element()
    const body = page.getByText("Popover Body").element()
    const footer = page.getByText("Popover Footer").element()
    const content = header.parentElement
    const positioner = content?.parentElement

    expect(trigger).toHaveClass("ui-popover__trigger")
    expect(anchor).toHaveClass("ui-popover__anchor")
    expect(header).toHaveClass("ui-popover__header")
    expect(body).toHaveClass("ui-popover__body")
    expect(footer).toHaveClass("ui-popover__footer")
    expect(content).toHaveClass("ui-popover__content")
    expect(positioner).toHaveClass("ui-popover__positioner")
  })

  test("renders HTML tag correctly", async () => {
    await render(<ComponentWithAnchor defaultOpen />)
    const header = page.getByText("Popover Header").element()
    const body = page.getByText("Popover Body").element()
    const footer = page.getByText("Popover Footer").element()
    const content = header.parentElement
    const positioner = content?.parentElement

    expect(header.tagName).toBe("DIV")
    expect(body.tagName).toBe("DIV")
    expect(footer.tagName).toBe("DIV")
    expect(content?.tagName).toBe("DIV")
    expect(positioner?.tagName).toBe("DIV")
  })

  test("should close with escape key", async () => {
    const { user } = await render(<Component />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect.element(page.getByText("Popover Header")).toBeVisible()
    await expect.element(page.getByText("Popover Body")).toBeVisible()
    await expect.element(page.getByText("Popover Footer")).toBeVisible()

    await user.tab()
    await user.keyboard("{Escape}")

    await expect.poll(() => page.getByText("Popover Header").query()).toBeNull()
    await expect.poll(() => page.getByText("Popover Body").query()).toBeNull()
    await expect.poll(() => page.getByText("Popover Footer").query()).toBeNull()
  })

  test("should not close with escape key when `closeOnEsc` is false", async () => {
    const { user } = await render(<Component closeOnEsc={false} />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const header = page.getByText("Popover Header")

    await user.tab()
    await user.keyboard("{Escape}")

    await expect.element(header).toBeVisible()
  })

  test("should return focus to trigger after escape key", async () => {
    const { user } = await render(<Component />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect.element(page.getByText("Popover Header")).toBeVisible()

    page.getByTestId("popoverContent").element().focus()
    await user.keyboard("{Escape}")

    await expect
      .poll(() => {
        const active = document.activeElement

        return active === triggerButton.element() || active === document.body
      })
      .toBe(true)
  })

  test("can close on blur", async () => {
    const { user } = await render(<Component />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect.element(page.getByText("Popover Header")).toBeVisible()
    await expect.element(page.getByText("Popover Body")).toBeVisible()
    await expect.element(page.getByText("Popover Footer")).toBeVisible()

    document.body.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }))
    document.body.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }))
    document.body.dispatchEvent(new MouseEvent("click", { bubbles: true }))

    await expect.poll(() => page.getByText("Popover Header").query()).toBeNull()
    await expect.poll(() => page.getByText("Popover Body").query()).toBeNull()
    await expect.poll(() => page.getByText("Popover Footer").query()).toBeNull()
  })

  test("should close when close trigger is clicked", async () => {
    const { user } = await render(<ComponentWithCloseTrigger />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const closeButton = page.getByRole("button", {
      name: "Close",
    })

    await user.click(closeButton)

    await expect.poll(() => page.getByText("Popover Header").query()).toBeNull()
  })

  test("should return focus to trigger after close trigger is clicked", async () => {
    const { user } = await render(<ComponentWithCloseTrigger />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const closeButton = page.getByRole("button", {
      name: "Close",
    })

    await user.click(closeButton)

    await expect
      .poll(() => document.activeElement)
      .toBe(triggerButton.element())
  })

  test("should apply modal behavior when `modal` is true", async () => {
    const { user } = await render(<Component modal />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect
      .element(page.getByTestId("popoverContent"))
      .toHaveAttribute("aria-modal", "true")
  })

  test("should block scroll when `blockScrollOnMount` is true", async () => {
    const { user } = await render(<Component blockScrollOnMount />)

    const triggerButton = page.getByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await expect.element(page.getByText("Popover Header")).toBeVisible()

    await expect.poll(() => document.body.style.overflow).toBe("hidden")
  })

  test("should render children as function", async () => {
    const childrenFn = vi.fn(({ open }) => (
      <div data-testid="fn-child">{open ? "open" : "closed"}</div>
    ))

    await render(<Popover.Root defaultOpen>{childrenFn}</Popover.Root>)

    expect(childrenFn).toHaveBeenCalledWith(
      expect.objectContaining({ open: true }),
    )
    await expect.element(page.getByTestId("fn-child")).toHaveTextContent("open")
  })
})

describe("usePopupAnimationProps", () => {
  test("returns scale animation props by default", async () => {
    const { result } = await renderHook(() => usePopupAnimationProps())
    expect(result.current).toHaveProperty("animate", "enter")
    expect(result.current).toHaveProperty("exit", "exit")
    expect(result.current).toHaveProperty("initial", "exit")
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      reverse: true,
      scale: 0.95,
    })
  })

  test("returns slide-fade props for `inline-end`", async () => {
    const { result } = await renderHook(() =>
      usePopupAnimationProps({ animationScheme: "inline-end" }),
    )
    expect(result.current).toHaveProperty("animate", "enter")
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      offsetX: 16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `inline-start`", async () => {
    const { result } = await renderHook(() =>
      usePopupAnimationProps({ animationScheme: "inline-start" }),
    )
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      offsetX: -16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `block-start`", async () => {
    const { result } = await renderHook(() =>
      usePopupAnimationProps({ animationScheme: "block-start" }),
    )
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      offsetY: -16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `block-end`", async () => {
    const { result } = await renderHook(() =>
      usePopupAnimationProps({ animationScheme: "block-end" }),
    )
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      offsetY: 16,
      reverse: true,
    })
  })

  test("returns empty object for `none`", async () => {
    const { result } = await renderHook(() =>
      usePopupAnimationProps({ animationScheme: "none" }),
    )
    expect(result.current).toStrictEqual({})
  })

  test("passes custom duration", async () => {
    const { result } = await renderHook(() =>
      usePopupAnimationProps({
        animationScheme: "scale",
        duration: 0.5,
      }),
    )
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.5,
      reverse: true,
      scale: 0.95,
    })
  })
})
