import type { ChangeEvent, FC } from "react"
import { act, fireEvent, render, screen } from "#test"
import { useState } from "react"
import { vi } from "vitest"
import { useControllableEventState, useControllableState } from "./"

describe("useControllableEventState", () => {
  test("reads ev.target.value for non-boolean inputs", () => {
    const onChange = vi.fn()

    const Component: FC = () => {
      const [value, setValue] = useControllableEventState<
        string,
        HTMLInputElement
      >({
        defaultValue: "",
        onChange,
      })

      return (
        <input
          type="text"
          data-testid="input"
          value={value}
          onChange={setValue}
        />
      )
    }

    render(<Component />)

    act(() => {
      fireEvent.change(screen.getByTestId("input"), {
        target: { value: "hello" },
      })
    })

    expect(onChange).toHaveBeenCalledTimes(1)
    const ev = onChange.mock.calls[0]![0] as ChangeEvent<HTMLInputElement>
    expect(ev.target.value).toBe("hello")
  })

  test("updates defaultValue in uncontrolled mode", () => {
    const Component: FC = () => {
      const [value, setValue] = useControllableEventState<
        string,
        HTMLInputElement
      >({
        defaultValue: "initial",
      })

      return (
        <input
          type="text"
          data-testid="input"
          value={value}
          onChange={setValue}
        />
      )
    }

    render(<Component />)

    act(() => {
      fireEvent.change(screen.getByTestId("input"), {
        target: { value: "updated" },
      })
    })

    expect(screen.getByTestId("input")).toHaveValue("updated")
  })
})

describe("useControllableState", () => {
  test("works in uncontrolled mode with defaultValue", () => {
    const Component: FC = () => {
      const [value, setValue] = useControllableState<string>({
        defaultValue: "initial",
      })

      return (
        <button data-testid="btn" onClick={() => setValue("updated")}>
          {value}
        </button>
      )
    }

    render(<Component />)
    expect(screen.getByTestId("btn")).toHaveTextContent("initial")

    act(() => {
      fireEvent.click(screen.getByTestId("btn"))
    })

    expect(screen.getByTestId("btn")).toHaveTextContent("updated")
  })

  test("works in controlled mode", () => {
    const onChange = vi.fn()

    const Component: FC = () => {
      const [value, setValue] = useState("controlled")
      const [state, setState] = useControllableState<string>({
        value,
        onChange: (v) => {
          onChange(v)
          setValue(v)
        },
      })

      return (
        <button data-testid="btn" onClick={() => setState("new")}>
          {state}
        </button>
      )
    }

    render(<Component />)
    expect(screen.getByTestId("btn")).toHaveTextContent("controlled")

    act(() => {
      fireEvent.click(screen.getByTestId("btn"))
    })

    expect(onChange).toHaveBeenCalledWith("new")
    expect(screen.getByTestId("btn")).toHaveTextContent("new")
  })
})
