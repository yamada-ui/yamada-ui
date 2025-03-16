import type { FC } from "react"
import type { UseClickableProps } from "../src"
import { act, fireEvent, render } from "@yamada-ui/test"
import { vi } from "vitest"
import { useClickable } from "../src"

const setup = (props: UseClickableProps = {}) => {
  const Component: FC = () => {
    const clickableProps = useClickable({
      disableTouchBehavior: false,
      ...props,
    })
    return (
      <div data-testid="button" {...clickableProps}>
        Dummy button
      </div>
    )
  }
  const utils = render(<Component />)
  const button = utils.getByTestId("button")
  return { ...utils, button }
}

describe("useClickable", () => {
  test("calls onKeyDown when key is pressed", () => {
    const onKeyDown = vi.fn()
    const { button } = setup({ onKeyDown })
    act(() => {
      fireEvent.focus(button)
      fireEvent.keyDown(button, { key: "ArrowDown" })
    })
    expect(onKeyDown.mock.calls[0]?.[0]).toMatchObject({
      key: "ArrowDown",
      type: "keydown",
    })
  })

  test("calls onKeyUp when key is released", () => {
    const onKeyUp = vi.fn()
    const { button } = setup({ onKeyUp })
    act(() => {
      fireEvent.focus(button)
      fireEvent.keyUp(button, { key: "ArrowUp" })
    })
    expect(onKeyUp.mock.calls[0]?.[0]).toMatchObject({
      key: "ArrowUp",
      type: "keyup",
    })
  })

  test("calls onClick when element is clicked", () => {
    const onClick = vi.fn()
    const { button } = setup({ onClick })
    act(() => {
      fireEvent.click(button)
    })
    expect(onClick.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onMouseDown and onMouseUp when mouse button is pressed and released", () => {
    const onMouseDown = vi.fn()
    const onMouseUp = vi.fn()
    const { button } = setup({ onMouseDown, onMouseUp })
    act(() => {
      fireEvent.mouseDown(button)
      fireEvent.mouseUp(button)
    })
    expect(onMouseDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onMouseUp.mock.calls[0]?.[0]).toBeDefined()
  })

  test("does not call onMouseDown when disabled", () => {
    const onMouseDown = vi.fn()
    const { button } = setup({ disabled: true, onMouseDown })
    act(() => {
      fireEvent.mouseDown(button)
    })
    expect(onMouseDown).not.toHaveBeenCalled()
  })

  test("calls onKeyDown with Enter and onKeyUp", () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { button } = setup({ onKeyDown, onKeyUp })
    act(() => {
      fireEvent.keyDown(button, { key: "Enter" })
      fireEvent.keyUp(button)
    })
    expect(onKeyDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onKeyUp.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onKeyDown with Space and onKeyUp with Space", () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { button } = setup({ onKeyDown, onKeyUp })
    act(() => {
      fireEvent.keyDown(button, { key: " " })
      fireEvent.keyUp(button, { key: " " })
    })
    expect(onKeyDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onKeyUp.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onKeyDown with Space and onMouseLeave", () => {
    const onKeyDown = vi.fn()
    const onMouseLeave = vi.fn()
    const { button } = setup({ onKeyDown, onMouseLeave })
    act(() => {
      fireEvent.keyDown(button, { key: " " })
      fireEvent.mouseLeave(button)
    })
    expect(onKeyDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onMouseLeave.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onMouseOver and onMouseLeave", () => {
    const onMouseOver = vi.fn()
    const onMouseLeave = vi.fn()
    const { button } = setup({ onMouseLeave, onMouseOver })
    act(() => {
      fireEvent.mouseOver(button)
      fireEvent.mouseLeave(button)
    })
    expect(onMouseOver.mock.calls[0]?.[0]).toBeDefined()
    expect(onMouseLeave.mock.calls[0]?.[0]).toBeDefined()
  })

  test("does not call onMouseOver when disabled", () => {
    const onMouseOver = vi.fn()
    const { button } = setup({ disabled: true, onMouseOver })
    act(() => {
      fireEvent.mouseOver(button)
    })
    expect(onMouseOver).not.toHaveBeenCalled()
  })

  test("does not call onClick when disabled", () => {
    const onClick = vi.fn()
    const { button } = setup({ disabled: true, onClick })
    act(() => {
      fireEvent.click(button)
    })
    expect(onClick).not.toHaveBeenCalled()
  })

  test("does not call onClick when disabled but isFocusable", () => {
    const onClick = vi.fn()
    const { button } = setup({ disabled: true, isFocusable: true, onClick })
    act(() => {
      fireEvent.click(button)
    })
    expect(onClick).not.toHaveBeenCalled()
    expect(button).toHaveAttribute("aria-disabled", "true")
  })

  test("onDocumentKeyUp with space triggers preventDefault, stopPropagation and removes listener", () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { user } = setup({ onKeyDown, onKeyUp })

    act(() => {
      user.keyboard("{space>}{/space}")
    })

    expect(onKeyDown).toBeDefined()
    expect(onKeyUp).toBeDefined()
  })

  test("handleMouseLeave triggers preventDefault and setIsPressed", () => {
    const onMouseLeave = vi.fn()
    const { button } = setup({ clickOnSpace: true, onMouseLeave })
    act(() => {
      fireEvent.mouseDown(button)
    })

    act(() => {
      fireEvent.mouseLeave(button)
    })

    expect(onMouseLeave.mock.calls[0]?.[0]).toBeDefined()
  })
})
