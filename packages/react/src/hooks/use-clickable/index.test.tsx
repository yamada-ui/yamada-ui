import type { FC } from "react"
import type { UseClickableProps } from "./"
import { page, render } from "#test/browser"
import { vi } from "vitest"
import { useClickable } from "./"

function clickElement(locator: ReturnType<typeof page.getByTestId>) {
  const el = locator.element()
  if (el instanceof HTMLElement) el.click()
}

function dispatchMouseOver(locator: ReturnType<typeof page.getByTestId>) {
  const el = locator.element()
  if (el instanceof HTMLElement) {
    el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }))
  }
}

const setup = async (props: UseClickableProps = {}) => {
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
  const { user } = await render(<Component />)
  const button = page.getByTestId("button")
  return { button, user }
}

describe("useClickable", () => {
  test("calls onKeyDown when key is pressed", async () => {
    const onKeyDown = vi.fn()
    const { button, user } = await setup({ onKeyDown })
    await user.click(button)
    await user.keyboard("{ArrowDown}")
    expect(onKeyDown.mock.calls[0]?.[0]).toMatchObject({
      key: "ArrowDown",
      type: "keydown",
    })
  })

  test("calls onKeyUp when key is released", async () => {
    const onKeyUp = vi.fn()
    const { button, user } = await setup({ onKeyUp })
    await user.click(button)
    await user.keyboard("{ArrowUp}")
    expect(onKeyUp.mock.calls[0]?.[0]).toMatchObject({
      key: "ArrowUp",
      type: "keyup",
    })
  })

  test("calls onClick when element is clicked", async () => {
    const onClick = vi.fn()
    const { button, user } = await setup({ onClick })
    await user.click(button)
    expect(onClick.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onMouseDown and onMouseUp when mouse button is pressed and released", async () => {
    const onMouseDown = vi.fn()
    const onMouseUp = vi.fn()
    const { button, user } = await setup({ onMouseDown, onMouseUp })
    await user.click(button)
    expect(onMouseDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onMouseUp.mock.calls[0]?.[0]).toBeDefined()
  })

  test("does not call onMouseDown when disabled", async () => {
    const onMouseDown = vi.fn()
    const { button } = await setup({ disabled: true, onMouseDown })
    clickElement(button)
    expect(onMouseDown).not.toHaveBeenCalled()
  })

  test("calls onKeyDown with Enter and onKeyUp", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { button, user } = await setup({ onKeyDown, onKeyUp })
    await user.click(button)
    await user.keyboard("{Enter}")
    expect(onKeyDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onKeyUp.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onKeyDown with Space and onKeyUp with Space", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { button, user } = await setup({ onKeyDown, onKeyUp })
    await user.click(button)
    await user.keyboard("{ }")
    expect(onKeyDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onKeyUp.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onKeyDown with Space and onMouseLeave", async () => {
    const onKeyDown = vi.fn()
    const onMouseLeave = vi.fn()
    const { button, user } = await setup({ onKeyDown, onMouseLeave })
    await user.click(button)
    await user.keyboard("{ >}")
    await user.unhover(button)
    expect(onKeyDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onMouseLeave.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onMouseOver and onMouseLeave", async () => {
    const onMouseOver = vi.fn()
    const onMouseLeave = vi.fn()
    const { button, user } = await setup({ onMouseLeave, onMouseOver })
    await user.hover(button)
    await user.unhover(button)
    expect(onMouseOver.mock.calls[0]?.[0]).toBeDefined()
    expect(onMouseLeave.mock.calls[0]?.[0]).toBeDefined()
  })

  test("does not call onMouseOver when disabled", async () => {
    const onMouseOver = vi.fn()
    const { button } = await setup({ disabled: true, onMouseOver })
    dispatchMouseOver(button)
    expect(onMouseOver).not.toHaveBeenCalled()
  })

  test("does not call onClick when disabled", async () => {
    const onClick = vi.fn()
    const { button } = await setup({ disabled: true, onClick })
    clickElement(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  test("does not call onClick when disabled but isFocusable", async () => {
    const onClick = vi.fn()
    const { button } = await setup({
      disabled: true,
      focusable: true,
      onClick,
    })
    clickElement(button)
    expect(onClick).not.toHaveBeenCalled()
    await expect.element(button).toHaveAttribute("aria-disabled", "true")
  })

  test("onDocumentKeyUp with space triggers preventDefault, stopPropagation and removes listener", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { button, user } = await setup({ onKeyDown, onKeyUp })
    await user.click(button)
    await user.keyboard("{ }")
    expect(onKeyDown).toBeDefined()
    expect(onKeyUp).toBeDefined()
  })

  test("handleMouseLeave triggers preventDefault and setIsPressed", async () => {
    const onMouseLeave = vi.fn()
    const { button, user } = await setup({
      clickOnSpace: true,
      onMouseLeave,
    })
    await user.click(button)
    await user.unhover(button)
    expect(onMouseLeave.mock.calls[0]?.[0]).toBeDefined()
  })
})
