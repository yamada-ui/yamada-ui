import type { RadioItem } from "../src"
import { ui } from "@yamada-ui/core"
import { a11y, fireEvent, render, renderHook, screen } from "@yamada-ui/test"
import { Radio, RadioGroup, useRadioGroup } from "../src"

describe("<RadioGroup />", () => {
  test("should pass a11y test", async () => {
    await a11y(
      <RadioGroup>
        <Radio>Radio 1</Radio>
        <Radio>Radio 2</Radio>
        <Radio>Radio 3</Radio>
      </RadioGroup>,
    )
  })

  test("defaultValue should be checked correctly", async () => {
    render(
      <RadioGroup defaultValue="1">
        <Radio value="1">Radio 1</Radio>
        <Radio value="2">Radio 2</Radio>
        <Radio value="3">Radio 3</Radio>
      </RadioGroup>,
    )

    const radio1 = await screen.findByRole("radio", { name: "Radio 1" })
    const radio2 = await screen.findByRole("radio", { name: "Radio 2" })
    const radio3 = await screen.findByRole("radio", { name: "Radio 3" })

    expect(radio1).toBeChecked()
    expect(radio2).not.toBeChecked()
    expect(radio3).not.toBeChecked()
  })

  test("should be change value when click other radio button", async () => {
    render(
      <RadioGroup defaultValue="1">
        <Radio value="1">Radio 1</Radio>
        <Radio value="2">Radio 2</Radio>
        <Radio value="3">Radio 3</Radio>
      </RadioGroup>,
    )

    const radio1 = await screen.findByRole("radio", { name: "Radio 1" })
    const radio2 = await screen.findByRole("radio", { name: "Radio 2" })
    const radio3 = await screen.findByRole("radio", { name: "Radio 3" })

    // Due to a bug in the nwsapi library, which jsdom depends on,
    // writing `await user.click(radio2)` here causes an error to be thrown.
    fireEvent.click(radio2)

    expect(radio1).not.toBeChecked()
    expect(radio2).toBeChecked()
    expect(radio3).not.toBeChecked()
  })

  test("should return checked attribute when isNative is true", () => {
    const { result } = renderHook(() =>
      useRadioGroup({ defaultValue: "1", isNative: true }),
    )
    const props = result.current.getRadioProps({ value: "1" })

    expect(props).toHaveProperty("checked")
  })

  test("should return checked attribute when isNative is false", () => {
    const { result } = renderHook(() =>
      useRadioGroup({ isNative: false, value: undefined }),
    )
    const props = result.current.getRadioProps()

    expect(props).toHaveProperty("checked")
  })

  test("renders Radio components from items when validChildren is empty and items is not empty", async () => {
    const items: RadioItem[] = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ]

    render(<RadioGroup items={items} />)

    const radio1 = await screen.findByRole("radio", { name: "Option 1" })
    const radio2 = await screen.findByRole("radio", { name: "Option 2" })
    const radio3 = await screen.findByRole("radio", { name: "Option 3" })

    expect(radio1).toBeInTheDocument()
    expect(radio2).toBeInTheDocument()
    expect(radio3).toBeInTheDocument()
  })

  test("onChange with focus should move to the first Radio", async () => {
    const { result } = renderHook(() => useRadioGroup({ defaultValue: "1" }))

    const { user } = render(
      <ui.div
        {...result.current.getContainerProps()}
        onFocus={result.current.onFocus}
      >
        <label>
          <input type="radio" />
          Radio 1
        </label>
        <label>
          <input type="radio" />
          Radio 2
        </label>
      </ui.div>,
    )

    await user.tab()

    const radio1 = await screen.findByRole("radio", { name: "Radio 1" })
    const radio2 = await screen.findByRole("radio", { name: "Radio 2" })

    expect(radio1).toHaveFocus()
    expect(radio2).not.toHaveFocus()
  })

  test("onChange with focus should move to the second Radio", async () => {
    const { result } = renderHook(() => useRadioGroup({ defaultValue: "2" }))

    const { user } = render(
      <ui.div
        {...result.current.getContainerProps()}
        onFocus={result.current.onFocus}
      >
        <label>
          <input type="radio" disabled />
          Radio 1
        </label>
        <label>
          <input type="radio" />
          Radio 2
        </label>
      </ui.div>,
    )

    await user.tab()

    const radio1 = await screen.findByRole("radio", { name: "Radio 1" })
    const radio2 = await screen.findByRole("radio", { name: "Radio 2" })

    expect(radio1).not.toHaveFocus()
    expect(radio2).toHaveFocus()
  })

  test("should add value when radiobutton is checked", () => {
    const { result } = renderHook(() => useRadioGroup({ defaultValue: "1" }))

    expect(result.current.value).toBe("1")
  })

  test("RadioGroup should have gap property set to 2px", async () => {
    render(<RadioGroup gap="2px" />)

    const radioGroup = await screen.findByRole("radiogroup")
    expect(radioGroup).toHaveStyle({ gap: "2px" })
  })

  test("RadioGroup with direction row should have gap property set to 1rem", async () => {
    render(<RadioGroup direction="row" />)

    const radioGroup = await screen.findByRole("radiogroup")
    expect(radioGroup).toHaveStyle({ gap: "1rem" })
  })
})
