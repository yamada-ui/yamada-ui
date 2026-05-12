import type { ChangeEvent, FC } from "react"
import { useState } from "react"
import { vi } from "vitest"
import { page, render } from "#test/browser"
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

    await user.fill(page.getByTestId("input"), "hello")

    expect(onChange).toHaveBeenCalledTimes(1)
    const ev = onChange.mock.calls[0]![0] as ChangeEvent<HTMLInputElement>
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

    await user.fill(page.getByTestId("input"), "updated")

    await expect.element(page.getByTestId("input")).toHaveValue("updated")
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

    await expect.element(page.getByTestId("btn")).toHaveTextContent("initial")

    await user.click(page.getByTestId("btn"))

    await expect.element(page.getByTestId("btn")).toHaveTextContent("updated")
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

    await expect
      .element(page.getByTestId("btn"))
      .toHaveTextContent("controlled")

    await user.click(page.getByTestId("btn"))

    expect(onChange).toHaveBeenCalledWith("new")
    await expect.element(page.getByTestId("btn")).toHaveTextContent("new")
  })
})
