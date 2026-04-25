import { a11y, page, render } from "#test/browser"
import { vi } from "vitest"
import { Toggle, ToggleGroup } from "."
import { noop } from "../../utils"

describe("<Toggle />", () => {
  test("renders component correctly", async () => {
    await a11y(<Toggle>Toggle</Toggle>)
  })

  test("renders toggle group correctly", async () => {
    await a11y(
      <ToggleGroup.Root defaultValue={[]}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )
  })

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
    expect(onChange).not.toHaveBeenCalled()
  })

  test("should handle readOnly prop", async () => {
    await render(<Toggle readOnly>Toggle</Toggle>)

    const button = page.getByRole("button")
    await expect.element(button).toHaveAttribute("data-readonly")
    await expect.element(button).toHaveAttribute("aria-disabled", "true")
  })

  test("should handle icon prop", async () => {
    await render(<Toggle icon={<div>Icon</div>} />)
    await expect.element(page.getByText("Icon")).toBeInTheDocument()
  })

  test("should handle onChange callback", async () => {
    const onChange = vi.fn()
    const { user } = await render(<Toggle onChange={onChange}>Toggle</Toggle>)

    await user.click(page.getByRole("button"))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(true)

    await user.click(page.getByRole("button"))
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenLastCalledWith(false)
  })

  test("should handle hidden checkbox onChange event", async () => {
    const onChange = vi.fn()
    const { user } = await render(<Toggle onChange={onChange}>Toggle</Toggle>)

    const button = page.getByRole("button")
    const checkbox = page.getByRole("checkbox", { includeHidden: true })
    await expect.element(checkbox).toBeInTheDocument()

    await user.click(button)
    expect(onChange).toHaveBeenLastCalledWith(true)
    await expect
      .element(page.getByRole("button"))
      .toHaveAttribute("data-checked")
    await expect.element(checkbox).toBeChecked()

    await user.click(button)
    expect(onChange).toHaveBeenLastCalledWith(false)
    await expect
      .element(page.getByRole("button"))
      .not.toHaveAttribute("data-checked")
    await expect.element(checkbox).not.toBeChecked()
  })

  test("should handle hidden checkbox change event", async () => {
    const onChange = vi.fn()
    const { user } = await render(<Toggle onChange={onChange}>Toggle</Toggle>)

    const button = page.getByRole("button")
    const checkbox = page.getByRole("checkbox", { includeHidden: true })
    await user.click(button)
    expect(onChange).toHaveBeenLastCalledWith(true)
    await expect.element(checkbox).toBeChecked()

    await user.click(button)
    expect(onChange).toHaveBeenLastCalledWith(false)
    await expect.element(checkbox).not.toBeChecked()
  })

  test("should handle hidden checkbox change event in toggle group", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <ToggleGroup.Root defaultValue={[]} onChange={onChange}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    const checkboxes = page.getByRole("checkbox", { includeHidden: true })
    await user.click(page.getByRole("button", { name: "A" }))
    expect(onChange).toHaveBeenCalledWith(["a"])
    await expect.element(checkboxes.nth(0)).toBeChecked()
  })

  test("should warn when value is not provided in controlled mode", async () => {
    vi.spyOn(console, "warn").mockImplementation(noop)

    const { user } = await render(
      <ToggleGroup.Root value={["toggle1"]}>
        <ToggleGroup.Item value="toggle1">Toggle1</ToggleGroup.Item>
        <ToggleGroup.Item value={undefined}>undefined</ToggleGroup.Item>
      </ToggleGroup.Root>,
    )

    await user.click(page.getByRole("button", { name: /toggle1/i }))
    await user.click(page.getByRole("button", { name: /toggle1/i }))

    expect(console.warn).toHaveBeenLastCalledWith(
      "Toggle: value is required. Please set the value.",
    )
    vi.restoreAllMocks()
  })
})
