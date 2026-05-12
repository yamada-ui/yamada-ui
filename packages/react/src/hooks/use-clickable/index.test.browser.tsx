import type { FC } from "react"
import type { UseClickableProps } from "./"
import { a11y, page, render } from "#test/browser"
import { useClickable } from "./"

const setup = async (props: UseClickableProps = {}) => {
  const Component: FC = () => {
    const clickableProps = useClickable({
      disableTouchBehavior: false,
      ...props,
    })

    return <div {...clickableProps}>Dummy button</div>
  }

  const utils = await render(<Component />)
  const button = page.getByRole("button", { name: "Dummy button" })

  return { ...utils, button }
}

describe("useClickable", () => {
  test("passes a11y checks", async () => {
    const Component: FC = () => {
      const clickableProps = useClickable({ disableTouchBehavior: false })

      return <div {...clickableProps}>Dummy button</div>
    }

    await a11y(<Component />)
  })

  test("calls onKeyDown when key is pressed", async () => {
    const onKeyDown = vi.fn()
    const { user } = await setup({ onKeyDown })

    await user.tab()
    onKeyDown.mockClear()
    await user.keyboard("{ArrowDown>}")

    expect(onKeyDown.mock.calls[0]?.[0]).toMatchObject({
      key: "ArrowDown",
      type: "keydown",
    })
  })

  test("calls onKeyUp when key is released", async () => {
    const onKeyUp = vi.fn()
    const { user } = await setup({ onKeyUp })

    await user.tab()
    onKeyUp.mockClear()
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
    const { button, user } = await setup({ disabled: true, onMouseDown })

    await user.click(button, { force: true })

    expect(onMouseDown).not.toHaveBeenCalled()
  })

  test("calls onKeyDown with Enter and onKeyUp", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { user } = await setup({ onKeyDown, onKeyUp })

    await user.tab()
    onKeyDown.mockClear()
    onKeyUp.mockClear()
    await user.keyboard("{Enter}")

    expect(onKeyDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onKeyUp.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onKeyDown with Space and onKeyUp with Space", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { user } = await setup({ onKeyDown, onKeyUp })

    await user.tab()
    onKeyDown.mockClear()
    onKeyUp.mockClear()
    await user.keyboard("{Space}")

    expect(onKeyDown.mock.calls[0]?.[0]).toBeDefined()
    expect(onKeyUp.mock.calls[0]?.[0]).toBeDefined()
  })

  test("calls onKeyDown with Space and onMouseLeave", async () => {
    const onKeyDown = vi.fn()
    const onMouseLeave = vi.fn()
    const { button, user } = await setup({ onKeyDown, onMouseLeave })

    await user.hover(button)
    await user.tab()
    onKeyDown.mockClear()
    onMouseLeave.mockClear()
    await user.keyboard("{Space>}")
    await user.unhover(button)
    await user.keyboard("{/Space}")

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
    const { button, user } = await setup({ disabled: true, onMouseOver })

    await user.hover(button)

    expect(onMouseOver).not.toHaveBeenCalled()
  })

  test("does not call onClick when disabled", async () => {
    const onClick = vi.fn()
    const { button, user } = await setup({ disabled: true, onClick })

    await user.click(button, { force: true })

    expect(onClick).not.toHaveBeenCalled()
  })

  test("does not call onClick when disabled but isFocusable", async () => {
    const onClick = vi.fn()
    const { button, user } = await setup({
      disabled: true,
      focusable: true,
      onClick,
    })

    await user.click(button, { force: true })

    expect(onClick).not.toHaveBeenCalled()
    await expect.element(button).toHaveAttribute("aria-disabled", "true")
  })

  test("onDocumentKeyUp with space triggers key handlers", async () => {
    const onKeyDown = vi.fn()
    const onKeyUp = vi.fn()
    const { user } = await setup({ onKeyDown, onKeyUp })

    await user.tab()
    onKeyDown.mockClear()
    onKeyUp.mockClear()
    await user.keyboard("{Space>}{/Space}")

    expect(onKeyDown).toHaveBeenCalled()
    expect(onKeyUp).toHaveBeenCalled()
  })

  test("handleMouseLeave triggers when pointer leaves while pressed", async () => {
    const onMouseLeave = vi.fn()
    const { button, user } = await setup({ clickOnSpace: true, onMouseLeave })

    await user.hover(button)
    await user.unhover(button)

    expect(onMouseLeave.mock.calls[0]?.[0]).toBeDefined()
  })
})
