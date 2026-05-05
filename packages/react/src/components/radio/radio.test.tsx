import { vi } from "vitest"
import { a11y, render, renderHook, screen } from "#test"
import { RadioGroup } from "."
import { Radio } from "./radio"
import { useRadio } from "./use-radio"
import { useRadioGroup } from "./use-radio-group"

const items = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
]

describe("<Radio />", () => {
  test("renders component correctly", async () => {
    await a11y(<Radio defaultChecked>radio</Radio>)
  })

  test("forwards `aria-controls` to the input element", () => {
    render(<Radio aria-controls="panel1">radio</Radio>)
    expect(screen.getByRole("radio")).toHaveAttribute("aria-controls", "panel1")
  })

  test("forwards `aria-labelledby` to the input element", () => {
    render(<Radio aria-labelledby="label1">radio</Radio>)
    expect(screen.getByRole("radio")).toHaveAttribute(
      "aria-labelledby",
      "label1",
    )
  })

  test("forwards `tabIndex` to the input element", () => {
    render(<Radio tabIndex={-1}>radio</Radio>)
    expect(screen.getByRole("radio")).toHaveAttribute("tabindex", "-1")
  })

  test("sets `className` correctly", () => {
    render(<RadioGroup.Root items={items} />)
    const radio = screen.getAllByRole("radio")[0]
    expect(screen.getByRole("radiogroup")).toHaveClass("ui-radio__group")
    expect(radio?.parentElement).toHaveClass("ui-radio__root")
    expect(radio?.parentElement?.children[1]).toHaveClass("ui-radio__indicator")
    expect(radio?.parentElement?.children[2]).toHaveClass("ui-radio__label")
  })

  test("should check radio on click", async () => {
    const { user } = render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[0]!)

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()

    await user.click(radios[1]!)

    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  test("should not change value when group is disabled", async () => {
    const { user } = render(
      <RadioGroup.Root defaultValue="1" disabled>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[1]!)

    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when individual radio is disabled", async () => {
    const { user } = render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio disabled value="2">
          Option 2
        </Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[1]!)

    expect(radios[1]).not.toBeChecked()
  })

  test("should not change value when individual radio is readOnly", async () => {
    const { user } = render(
      <RadioGroup.Root>
        <Radio value="1">Option 1</Radio>
        <Radio readOnly value="2">
          Option 2
        </Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")
    await user.click(radios[1]!)

    expect(radios[1]).not.toBeChecked()
  })

  test("should handle defaultValue correctly", () => {
    render(
      <RadioGroup.Root defaultValue="2">
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    const radios = screen.getAllByRole("radio")

    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  test("merges custom className on RadioGroup.Root and Radio root", () => {
    render(
      <RadioGroup.Root className="from-group-root">
        <Radio className="from-radio-root" value="1">
          Option 1
        </Radio>
      </RadioGroup.Root>,
    )

    expect(screen.getByRole("radiogroup")).toHaveClass("ui-radio__group")
    expect(screen.getByRole("radiogroup")).toHaveClass("from-group-root")

    const radio = screen.getByRole("radio", { name: "Option 1" })

    expect(radio.parentElement).toHaveClass("ui-radio__root")
    expect(radio.parentElement).toHaveClass("from-radio-root")
  })

  test("merges root props from useRadio with caller props", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()

    function Wrapper() {
      const { getRootProps } = useRadio({
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        onClick: restOnClick,
      })
      const rootProps = getRootProps({
        className: "from-caller",
        style: { color: "blue", paddingTop: "8px" },
        "data-testid": "radio-root",
        onClick: callerOnClick,
      })

      return (
        <>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label {...rootProps}>radio</label>
          <input id="associated-radio" type="radio" />
        </>
      )
    }

    const { user } = render(<Wrapper />)
    const root = screen.getByTestId("radio-root")

    expect(root.className).toContain("from-rest")
    expect(root.className).toContain("from-caller")

    await user.click(root)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
  })

  test("merges root props from useRadioGroup with caller props", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()

    function Wrapper() {
      const { getRootProps } = useRadioGroup({
        ref: restRef,
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        onClick: restOnClick,
      })
      const rootProps = getRootProps({
        ref: callerRef,
        className: "from-caller",
        style: { color: "blue", paddingTop: "8px" },
        "data-testid": "caller-root",
        onClick: callerOnClick,
      })

      return <div {...rootProps} />
    }

    const { user } = render(<Wrapper />)
    const root = screen.getByTestId("caller-root")

    expect(root.className).toContain("from-rest")
    expect(root.className).toContain("from-caller")
    expect(root).toHaveAttribute("role", "radiogroup")

    await user.click(root)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
    expect(restRef).toHaveBeenCalledWith(root)
    expect(callerRef).toHaveBeenCalledWith(root)
  })

  test("should update value when onChange is called with a string value", async () => {
    const onChangeMock = vi.fn()

    const { result } = renderHook(() =>
      useRadioGroup<string>({ defaultValue: "1", onChange: onChangeMock }),
    )

    result.current.onChange("2")

    expect(onChangeMock).toHaveBeenCalledWith("2")
    await vi.waitFor(() => expect(result.current.value).toBe("2"))
  })
})
