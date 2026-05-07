import { createRef } from "react"
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

  test("sets `displayName` correctly", () => {
    expect(Radio.displayName).toBe("RadioRoot")
    expect(RadioGroup.Root.displayName).toBe("RadioGroup")
  })

  test("sets `className` correctly", () => {
    render(<RadioGroup.Root items={items} />)
    const radio = screen.getAllByRole("radio")[0]
    expect(screen.getByRole("radiogroup")).toHaveClass("ui-radio__group")
    expect(radio?.parentElement).toHaveClass("ui-radio__root")
    expect(radio?.parentElement?.children[1]).toHaveClass("ui-radio__indicator")
    expect(radio?.parentElement?.children[2]).toHaveClass("ui-radio__label")
  })

  test("sets HTML tags correctly", () => {
    render(<RadioGroup.Root items={items} />)
    const group = screen.getByRole("radiogroup")
    const radio = screen.getAllByRole("radio")[0]
    expect(group).toHaveProperty("tagName", "DIV")
    expect(radio?.parentElement).toHaveProperty("tagName", "LABEL")
    expect(radio).toHaveProperty("tagName", "INPUT")
    expect(radio?.parentElement?.children[1]).toHaveProperty("tagName", "DIV")
    expect(radio?.parentElement?.children[2]).toHaveProperty("tagName", "SPAN")
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

  test("should call group onChange with selected value", async () => {
    const onChange = vi.fn()
    const { user } = render(
      <RadioGroup.Root onChange={onChange}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup.Root>,
    )

    await user.click(screen.getByRole("radio", { name: "Option 1" }))

    expect(onChange).toHaveBeenCalledWith("1")
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

  test("should not change value when group is readOnly", async () => {
    const { user } = render(
      <RadioGroup.Root defaultValue="1" readOnly>
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

  test("should set refs on RadioGroup.Root and Radio input", () => {
    const groupRef = createRef<HTMLDivElement>()
    const radioRef = createRef<HTMLInputElement>()

    render(
      <RadioGroup.Root ref={groupRef}>
        <Radio ref={radioRef} value="1">
          Option 1
        </Radio>
      </RadioGroup.Root>,
    )

    expect(groupRef.current).toBe(screen.getByRole("radiogroup"))
    expect(radioRef.current).toBe(
      screen.getByRole("radio", { name: "Option 1" }),
    )
  })

  test("merges root props from useRadio with caller props", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    let mergedRootProps: unknown

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
      mergedRootProps = rootProps

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
    const resolvedRootProps = mergedRootProps as {
      "data-testid"?: string
      style?: {
        backgroundColor?: string
        color?: string
        paddingTop?: string
      }
    }

    expect(root.className).toContain("from-rest")
    expect(root.className).toContain("from-caller")
    expect(root).toHaveAttribute("data-testid", "radio-root")
    expect(resolvedRootProps["data-testid"]).toBe("radio-root")
    expect(resolvedRootProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })

    await user.click(root)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
  })

  test("merges root props from useRadioGroup with caller props", async () => {
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()
    const restRef = vi.fn()
    const callerRef = vi.fn()
    let mergedRootProps: unknown

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
      mergedRootProps = rootProps

      return <div {...rootProps} />
    }

    const { user } = render(<Wrapper />)
    const root = screen.getByTestId("caller-root")
    const resolvedRootProps = mergedRootProps as {
      "data-testid"?: string
      style?: {
        backgroundColor?: string
        color?: string
        paddingTop?: string
      }
    }

    expect(root.className).toContain("from-rest")
    expect(root.className).toContain("from-caller")
    expect(root).toHaveAttribute("data-testid", "caller-root")
    expect(resolvedRootProps["data-testid"]).toBe("caller-root")
    expect(resolvedRootProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })
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
