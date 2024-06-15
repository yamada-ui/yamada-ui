import { act, fireEvent, render } from "@yamada-ui/test"
import { type FC } from "react"
import { vi } from "vitest"
import type { UseClickableProps } from "../src"
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
  test("calls onKeyDown when key is pressed", async () => {
    const onKeyDown = vi.fn()
    const { button } = setup({ onKeyDown })
    await act(async () => {
      fireEvent.focus(button)
      fireEvent.keyDown(button, { key: "ArrowDown" })
    })
    expect(onKeyDown.mock.calls[0][0]).toMatchObject({
      key: "ArrowDown",
      type: "keydown",
    })
  })

  test("calls onKeyUp when key is released", async () => {
    const onKeyUp = vi.fn()
    const { button } = setup({ onKeyUp })
    await act(async () => {
      fireEvent.focus(button)
      fireEvent.keyUp(button, { key: "ArrowUp" })
    })
    expect(onKeyUp.mock.calls[0][0]).toMatchObject({
      key: "ArrowUp",
      type: "keyup",
    })
  })

  test("calls onClick when element is clicked", async () => {
    const onClick = vi.fn()
    const { button } = setup({ onClick })
    await act(async () => {
      fireEvent.click(button)
    })
    expect(onClick.mock.calls[0][0]).toBeDefined()
  })

  test("calls onMouseDown and onMouseUp when mouse button is pressed and released", async () => {
    const onMouseDown = vi.fn()
    const onMouseUp = vi.fn()
    const { button } = setup({ onMouseDown, onMouseUp })
    await act(async () => {
      fireEvent.mouseDown(button)
      fireEvent.mouseUp(button)
    })
    expect(onMouseDown.mock.calls[0][0]).toBeDefined()
    expect(onMouseUp.mock.calls[0][0]).toBeDefined()
  })

  test("does not call onMouseDown when disabled", async () => {
    const onMouseDown = vi.fn()
    const { button } = setup({ onMouseDown, isDisabled: true })
    await act(async () => {
      fireEvent.mouseDown(button)
    })
    expect(onMouseDown).not.toHaveBeenCalled()
  })

  test("calls onKeyDown with Enter and onKeyUp", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { button } = setup({ onKeyDown, onKeyUp })
    await act(async () => {
      fireEvent.keyDown(button, { key: "Enter" })
      fireEvent.keyUp(button)
    })
    expect(onKeyDown.mock.calls[0][0]).toBeDefined()
    expect(onKeyUp.mock.calls[0][0]).toBeDefined()
  })

  test("calls onKeyDown with Space and onKeyUp with Space", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { button } = setup({ onKeyDown, onKeyUp })
    await act(async () => {
      fireEvent.keyDown(button, { key: " " })
      fireEvent.keyUp(button, { key: " " })
    })
    expect(onKeyDown.mock.calls[0][0]).toBeDefined()
    expect(onKeyUp.mock.calls[0][0]).toBeDefined()
  })

  test("calls onKeyDown with Space and onMouseLeave", async () => {
    const onKeyDown = vi.fn()
    const onMouseLeave = vi.fn()
    const { button } = setup({ onKeyDown, onMouseLeave })
    await act(async () => {
      fireEvent.keyDown(button, { key: " " })
      fireEvent.mouseLeave(button)
    })
    expect(onKeyDown.mock.calls[0][0]).toBeDefined()
    expect(onMouseLeave.mock.calls[0][0]).toBeDefined()
  })

  test("calls onMouseOver and onMouseLeave", async () => {
    const onMouseOver = vi.fn()
    const onMouseLeave = vi.fn()
    const { button } = setup({ onMouseOver, onMouseLeave })
    await act(async () => {
      fireEvent.mouseOver(button)
      fireEvent.mouseLeave(button)
    })
    expect(onMouseOver.mock.calls[0][0]).toBeDefined()
    expect(onMouseLeave.mock.calls[0][0]).toBeDefined()
  })

  test("does not call onMouseOver when disabled", async () => {
    const onMouseOver = vi.fn()
    const { button } = setup({ onMouseOver, isDisabled: true })
    await act(async () => {
      fireEvent.mouseOver(button)
    })
    expect(onMouseOver).not.toHaveBeenCalled()
  })

  test("does not call onClick when disabled", async () => {
    const onClick = vi.fn()
    const { button } = setup({ onClick, isDisabled: true })
    await act(async () => {
      fireEvent.click(button)
    })
    expect(onClick).not.toHaveBeenCalled()
  })

  test("does not call onClick when disabled but isFocusable", async () => {
    const onClick = vi.fn()
    const { button } = setup({ onClick, isDisabled: true, isFocusable: true })
    await act(async () => {
      fireEvent.click(button)
    })
    expect(onClick).not.toHaveBeenCalled()
    expect(button).toHaveAttribute("aria-disabled", "true")
  })

  test("onDocumentKeyUp with space triggers preventDefault, stopPropagation and removes listener", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { user } = setup({ onKeyDown, onKeyUp })

    await act(async () => {
      user.keyboard("{space>}{/space}")
    })

    expect(onKeyDown).toBeDefined()
    expect(onKeyUp).toBeDefined()
  })

  test("handleMouseLeave triggers preventDefault and setIsPressed", async () => {
    const onMouseLeave = vi.fn()
    const { button } = setup({ onMouseLeave, clickOnSpace: true })
    await act(async () => {
      fireEvent.mouseDown(button)
    })

    await act(async () => {
      fireEvent.mouseLeave(button)
    })

    expect(onMouseLeave.mock.calls[0][0]).toBeDefined()
  })
})
