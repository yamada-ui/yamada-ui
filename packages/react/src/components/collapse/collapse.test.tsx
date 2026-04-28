import { useState } from "react"
import { a11y, page, render } from "#test/browser"
import { Collapse } from "./collapse"

describe("<Collapse />", () => {
  test("renders component correctly", async () => {
    await a11y(<Collapse />)
  })

  test("sets `displayName` correctly", () => {
    expect(Collapse.displayName).toBe("Collapse")
  })

  test("sets `className` correctly", async () => {
    await render(<Collapse data-testid="collapse" />)
    await expect
      .element(page.getByTestId("collapse"))
      .toHaveClass("ui-collapse")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Collapse data-testid="collapse" />)
    expect(page.getByTestId("collapse").element().tagName).toBe("DIV")
  })

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

  test("animationOpacity set to true by default", async () => {
    await render(<Collapse open>Collapse</Collapse>)

    const collapse = page.getByText("Collapse")
    await expect.element(collapse).toHaveStyle({ opacity: "1" })
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

  test("height changes correctly after open set to true", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <Collapse endingHeight={200} open={open} startingHeight={50}>
            Collapse
          </Collapse>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    const collapse = page.getByText("Collapse")
    await expect.element(collapse).toHaveStyle({ height: "50px" })

    await user.click(button)
    await expect.element(collapse).toHaveStyle({ height: "200px" })
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
