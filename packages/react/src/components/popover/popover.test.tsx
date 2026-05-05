import { a11y, render, renderHook, screen } from "#test"
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

  test("passes a11y checks", async () => {
    await a11y(<Component defaultOpen />)
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

  test("renders children as function", () => {
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

describe("usePopupAnimationProps", () => {
  test("returns scale animation props by default", () => {
    const { result } = renderHook(() => usePopupAnimationProps())
    expect(result.current).toHaveProperty("animate", "enter")
    expect(result.current).toHaveProperty("exit", "exit")
    expect(result.current).toHaveProperty("initial", "exit")
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      reverse: true,
      scale: 0.95,
    })
  })

  test("returns slide-fade props for `inline-end`", () => {
    const { result } = renderHook(() =>
      usePopupAnimationProps({ animationScheme: "inline-end" }),
    )
    expect(result.current).toHaveProperty("animate", "enter")
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      offsetX: 16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `inline-start`", () => {
    const { result } = renderHook(() =>
      usePopupAnimationProps({ animationScheme: "inline-start" }),
    )
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      offsetX: -16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `block-start`", () => {
    const { result } = renderHook(() =>
      usePopupAnimationProps({ animationScheme: "block-start" }),
    )
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      offsetY: -16,
      reverse: true,
    })
  })

  test("returns slide-fade props for `block-end`", () => {
    const { result } = renderHook(() =>
      usePopupAnimationProps({ animationScheme: "block-end" }),
    )
    expect("custom" in result.current && result.current.custom).toStrictEqual({
      duration: 0.1,
      offsetY: 16,
      reverse: true,
    })
  })

  test("returns empty object for `none`", () => {
    const { result } = renderHook(() =>
      usePopupAnimationProps({ animationScheme: "none" }),
    )
    expect(result.current).toStrictEqual({})
  })

  test("passes custom duration", () => {
    const { result } = renderHook(() =>
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
