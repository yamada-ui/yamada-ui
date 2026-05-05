import { useState } from "react"
import { page, render } from "#test/browser"
import { Collapse } from "./collapse"

describe("<Collapse />", () => {
  test("toggles visibility on open change", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <Collapse open={open}>Collapse</Collapse>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    const collapse = page.getByText("Collapse")

    await expect.element(collapse).toHaveStyle({ height: "0px" })

    await user.click(button)
    await expect.element(collapse).toHaveStyle({ height: "auto" })

    await user.click(button)
    await expect.element(collapse).toHaveStyle({ height: "0px" })
  })

  test("no opacity when animationOpacity set to false", async () => {
    await render(
      <Collapse animationOpacity={false} open>
        Collapse
      </Collapse>,
    )

    const collapse = page.getByText("Collapse")
    await expect.element(collapse).toHaveStyle({ opacity: "" })
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <Collapse open={open} unmountOnExit>
            Collapse
          </Collapse>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    await expect
      .element(page.getByText("Collapse").query())
      .not.toBeInTheDocument()

    const button = page.getByRole("button", { name: /button/i })

    await user.click(button)
    await expect.element(page.getByText("Collapse")).toBeVisible()

    await user.click(button)
    await expect
      .element(page.getByText("Collapse").query())
      .not.toBeInTheDocument()
  })
})
