import type { FC } from "react"
import { page, render } from "#test/browser"
import { useState } from "react"
import { vi } from "vitest"
import { useControllableEventState, useControllableState } from "./"

describe("useControllableEventState", () => {
  test("reads ev.target.value for non-boolean inputs", async () => {
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

    const { user } = await render(<Component />)

    const input = page.getByTestId("input")
    await user.fill(input, "hello")

    expect(onChange).toHaveBeenCalledTimes(1)
    const ev = onChange.mock.calls[0]![0]
    expect(ev.target.value).toBe("hello")
  })

  test("updates defaultValue in uncontrolled mode", async () => {
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

    const { user } = await render(<Component />)

    const input = page.getByTestId("input")
    await user.fill(input, "updated")

    await expect.element(input).toHaveValue("updated")
  })
})

describe("useControllableState", () => {
  test("works in uncontrolled mode with defaultValue", async () => {
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

    const { user } = await render(<Component />)
    const btn = page.getByTestId("btn")
    await expect.element(btn).toHaveTextContent("initial")

    await user.click(btn)

    await expect.element(btn).toHaveTextContent("updated")
  })

  test("works in controlled mode", async () => {
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

    const { user } = await render(<Component />)
    const btn = page.getByTestId("btn")
    await expect.element(btn).toHaveTextContent("controlled")

    await user.click(btn)

    expect(onChange).toHaveBeenCalledWith("new")
    await expect.element(btn).toHaveTextContent("new")
  })
})
