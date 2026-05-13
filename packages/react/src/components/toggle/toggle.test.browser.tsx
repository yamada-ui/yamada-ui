import { page, render } from "#test/browser"
import { Toggle, ToggleGroup } from "."
import { noop } from "../../utils"

describe("<Toggle />", () => {
  test("should handle disabled prop", async () => {
    const onChange = vi.fn()
    const { user } = await render(
      <Toggle disabled onChange={onChange}>
        Toggle
      </Toggle>,
    )

    const button = page.getByRole("button")
    await expect.element(button).toBeDisabled()
    await expect(user.click(button, { timeout: 100 })).rejects.toBeDefined()
    expect(onChange).not.toHaveBeenCalled()
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
