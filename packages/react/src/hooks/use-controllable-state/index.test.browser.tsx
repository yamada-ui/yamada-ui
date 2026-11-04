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
          aria-label="Test input"
          value={value}
          onChange={setValue}
        />
      )
    }

    const { user } = await render(<Component />)

    await user.fill(page.getByRole("textbox"), "hello")

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
          aria-label="Test input"
          value={value}
          onChange={setValue}
        />
      )
    }

    const { user } = await render(<Component />)

    await user.fill(page.getByRole("textbox"), "updated")

    await expect.element(page.getByRole("textbox")).toHaveValue("updated")
  })
})

describe("useControllableState", () => {
  test("works in uncontrolled mode with defaultValue", async () => {
    const Component: FC = () => {
      const [value, setValue] = useControllableState<string>({
        defaultValue: "initial",
      })

      return <button onClick={() => setValue("updated")}>{value}</button>
    }

    const { user } = await render(<Component />)

    await expect.element(page.getByRole("button")).toHaveTextContent("initial")

    await user.click(page.getByRole("button"))

    await expect.element(page.getByRole("button")).toHaveTextContent("updated")
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

      return <button onClick={() => setState("new")}>{state}</button>
    }

    const { user } = await render(<Component />)

    await expect
      .element(page.getByRole("button"))
      .toHaveTextContent("controlled")

    await user.click(page.getByRole("button"))

    expect(onChange).toHaveBeenCalledWith("new")
    await expect.element(page.getByRole("button")).toHaveTextContent("new")
  })
})
