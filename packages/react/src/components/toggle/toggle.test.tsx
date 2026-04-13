import { page, render } from "#test/browser"
import { fireEvent } from "@testing-library/react"
import { vi } from "vitest"
import { Toggle, ToggleGroup } from "."
import { noop } from "../../utils"

describe("<Toggle />", () => {
  test("should render correctly", async () => {
    await render(<Toggle>Toggle</Toggle>)

    await expect.element(page.getByRole("button")).toBeInTheDocument()
  })

  test("sets `displayName` correctly", () => {
    expect(Toggle.displayName).toBe("ToggleRoot")
  })

  test("sets `className` correctly", async () => {
    await render(<Toggle>Toggle</Toggle>)

    await expect
      .element(page.getByRole("button"))
      .toHaveClass("ui-toggle__root")
  })

  test("should handle checked prop", async () => {
    const { rerender } = await render(<Toggle checked>Toggle</Toggle>)

    await expect
      .element(page.getByRole("button"))
      .toHaveAttribute("data-checked")

    await rerender(<Toggle checked={false}>Toggle</Toggle>)

    await expect
      .element(page.getByRole("button"))
      .not.toHaveAttribute("data-checked")
  })

  test("should handle disabled prop", async () => {
    const onChange = vi.fn()
    await render(
      <Toggle disabled onChange={onChange}>
        Toggle
      </Toggle>,
    )

    const button = page.getByRole("button")
    await expect.element(button).toBeDisabled()
    fireEvent.click(button.element())
    expect(onChange).not.toHaveBeenCalled()
  })

  test("should handle readOnly prop", async () => {
    const onChange = vi.fn()
    await render(
      <Toggle readOnly onChange={onChange}>
        Toggle
      </Toggle>,
    )

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-readonly")
    fireEvent.click(button.element())
    expect(onChange).not.toHaveBeenCalled()
  })

  test("should handle icon prop", async () => {
    await render(<Toggle icon={<div>Icon</div>} />)
    await expect.element(page.getByText("Icon")).toBeInTheDocument()
  })

  test("should handle onChange callback", async () => {
    const onChange = vi.fn()
    await render(<Toggle onChange={onChange}>Toggle</Toggle>)

    fireEvent.click(page.getByRole("button").element())
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(true)

    fireEvent.click(page.getByRole("button").element())
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith(false)
  })

  test("should handle hidden checkbox onChange event", async () => {
    const onChange = vi.fn()
    await render(<Toggle onChange={onChange}>Toggle</Toggle>)

    const checkbox = document.querySelector(
      'input[type="checkbox"][aria-hidden="true"]',
    )!
    expect(checkbox).toBeTruthy()

    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenLastCalledWith(true)
    await expect
      .element(page.getByRole("button"))
      .toHaveAttribute("data-checked")

    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenLastCalledWith(false)
    await expect
      .element(page.getByRole("button"))
      .not.toHaveAttribute("data-checked")
  })

  test("should handle hidden checkbox change event", async () => {
    const onChange = vi.fn()
    await render(<Toggle onChange={onChange}>Toggle</Toggle>)

    const checkbox = document.querySelector(
      'input[type="checkbox"][aria-hidden="true"]',
    )!
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenLastCalledWith(true)

    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenLastCalledWith(false)
  })

  test("should handle hidden checkbox change event in toggle group", async () => {
    const onChange = vi.fn()
    await render(
      <ToggleGroup.Root defaultValue={[]} onChange={onChange}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][aria-hidden="true"]',
    )
    fireEvent.click(checkboxes[0]!)
    expect(onChange).toHaveBeenCalledWith(["a"])
  })

  test("should warn when value is not provided in controlled mode", async () => {
    vi.spyOn(console, "warn").mockImplementation(noop)

    await render(
      <ToggleGroup.Root value={["toggle1"]}>
        <ToggleGroup.Item value="toggle1">Toggle1</ToggleGroup.Item>
        <ToggleGroup.Item value={undefined}>undefined</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    fireEvent.click(page.getByRole("button", { name: /toggle1/i }).element())
    fireEvent.click(page.getByRole("button", { name: /toggle1/i }).element())

    expect(console.warn).toHaveBeenLastCalledWith(
      "Toggle: value is required. Please set the value.",
    )
    vi.restoreAllMocks()
  })
})
