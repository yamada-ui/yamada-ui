import { a11y, render, screen, waitFor } from "#test"
import { Popover } from "."
import { Button } from "../button"
import { getPopupAnimationProps } from "./popover"

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

  test("sets `className` correctly", () => {
    render(<ComponentWithAnchor defaultOpen />)
    const trigger = screen.getByText("Popover Trigger")
    const anchor = screen.getByText("Popover Anchor")
    const header = screen.getByText("Popover Header")
    const body = screen.getByText("Popover Body")
    const footer = screen.getByText("Popover Footer")
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

  test("renders HTML tag correctly", () => {
    render(<ComponentWithAnchor defaultOpen />)
    const header = screen.getByText("Popover Header")
    const body = screen.getByText("Popover Body")
    const footer = screen.getByText("Popover Footer")
    const content = header.parentElement
    const positioner = content?.parentElement
    expect(header.tagName).toBe("DIV")
    expect(body.tagName).toBe("DIV")
    expect(footer.tagName).toBe("DIV")
    expect(content?.tagName).toBe("DIV")
    expect(positioner?.tagName).toBe("DIV")
  })

  test("should close with escape key", async () => {
    const { user } = render(<Component />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const header = await screen.findByText("Popover Header")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await user.tab()
    await user.keyboard("{escape}")

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
    await waitFor(() => expect(footer).not.toBeVisible())
  })

  test("should not close with escape key when `closeOnEsc` is false", async () => {
    const { user } = render(<Component closeOnEsc={false} />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const header = await screen.findByText("Popover Header")

    await user.tab()
    await user.keyboard("{escape}")

    expect(header).toBeVisible()
  })

  test("should return focus to trigger after escape key", async () => {
    const { user } = render(<Component />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await screen.findByText("Popover Header")

    await user.tab()
    await user.keyboard("{escape}")

    await waitFor(() => expect(triggerButton).toHaveFocus())
  })

  test("can close on blur", async () => {
    const { user } = render(<Component />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const header = await screen.findByText("Popover Header")
    const body = await screen.findByText("Popover Body")
    const footer = await screen.findByText("Popover Footer")

    await user.click(document.body)

    await waitFor(() => expect(header).not.toBeVisible())
    await waitFor(() => expect(body).not.toBeVisible())
    await waitFor(() => expect(footer).not.toBeVisible())
  })

  test("should close when close trigger is clicked", async () => {
    const { user } = render(<ComponentWithCloseTrigger />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const closeButton = await screen.findByRole("button", {
      name: "Close",
    })
    const header = await screen.findByText("Popover Header")

    await user.click(closeButton)

    await waitFor(() => expect(header).not.toBeVisible())
  })

  test("should return focus to trigger after close trigger is clicked", async () => {
    const { user } = render(<ComponentWithCloseTrigger />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const closeButton = await screen.findByRole("button", {
      name: "Close",
    })

    await user.click(closeButton)

    await waitFor(() => expect(triggerButton).toHaveFocus())
  })

  test("should apply modal behavior when `modal` is true", async () => {
    const { user } = render(<Component modal />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    const content = await screen.findByTestId("popoverContent")

    expect(content).toHaveAttribute("aria-modal", "true")
  })

  test("should block scroll when `blockScrollOnMount` is true", async () => {
    const { user } = render(<Component blockScrollOnMount />)

    const triggerButton = await screen.findByRole("button", {
      name: "Popover Trigger",
    })

    await user.click(triggerButton)

    await screen.findByText("Popover Header")

    await waitFor(() => expect(document.body.style.overflow).toBe("hidden"))
  })

  test("should render children as function", () => {
    const childrenFn = vi.fn(({ open }) => (
      <div data-testid="fn-child">{open ? "open" : "closed"}</div>
    ))

    render(<Popover.Root defaultOpen>{childrenFn}</Popover.Root>)

    expect(childrenFn).toHaveBeenCalledWith(
      expect.objectContaining({ open: true }),
    )
    expect(screen.getByTestId("fn-child")).toHaveTextContent("open")
  })
})

describe("getPopupAnimationProps", () => {
  test("returns scale animation props by default", () => {
    const props = getPopupAnimationProps()
    expect(props).toHaveProperty("animate", "enter")
    expect(props).toHaveProperty("exit", "exit")
    expect(props).toHaveProperty("initial", "exit")
    expect("custom" in props && props.custom).toStrictEqual({
      duration: undefined,
      reverse: true,
      scale: 0.95,
    })
  })

  test("returns slide-fade props for `inline-end`", () => {
    const props = getPopupAnimationProps("inline-end")
    expect(props).toHaveProperty("animate", "enter")
    expect("custom" in props && props.custom).toStrictEqual({
      duration: undefined,
      offsetX: 16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `inline-start`", () => {
    const props = getPopupAnimationProps("inline-start")
    expect("custom" in props && props.custom).toStrictEqual({
      duration: undefined,
      offsetX: -16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `block-start`", () => {
    const props = getPopupAnimationProps("block-start")
    expect("custom" in props && props.custom).toStrictEqual({
      duration: undefined,
      offsetY: -16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `block-end`", () => {
    const props = getPopupAnimationProps("block-end")
    expect("custom" in props && props.custom).toStrictEqual({
      duration: undefined,
      offsetY: 16,
      reverse: true,
    })
  })

  test("returns empty object for `none`", () => {
    const props = getPopupAnimationProps("none")
    expect(props).toStrictEqual({})
  })

  test("passes custom duration", () => {
    const props = getPopupAnimationProps("scale", 0.5)
    expect("custom" in props && props.custom).toStrictEqual({
      duration: 0.5,
      reverse: true,
      scale: 0.95,
    })
  })
})
