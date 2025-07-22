import { a11y, render, screen, wait, waitFor } from "#test"
import { useState } from "react"
import { Collapse } from "./collapse"

describe("<Collapse />", () => {
  test("renders component correctly", async () => {
    await a11y(<Collapse />)
  })

  test("sets `displayName` correctly", () => {
    expect(Collapse.displayName).toBe("Collapse")
  })

  test("sets `className` correctly", () => {
    render(<Collapse data-testid="collapse" />)
    expect(screen.getByTestId("collapse")).toHaveClass("ui-collapse")
  })

  test("renders HTML tag correctly", () => {
    render(<Collapse data-testid="collapse" />)
    expect(screen.getByTestId("collapse").tagName).toBe("DIV")
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

    const { user } = render(<TestComponent />)

    const button = screen.getByRole("button", { name: /button/i })
    const collapse = screen.getByText("Collapse")

    expect(collapse).toHaveStyle({
      height: "0px",
    })

    await user.click(button)
    await waitFor(() => {
      expect(collapse).toHaveStyle({
        height: "auto",
      })
    })

    await wait(300)

    await user.click(button)
    await waitFor(() => {
      expect(collapse).toHaveStyle({
        height: "0px",
      })
    })
  })

  test("animationOpacity set to true by default", async () => {
    render(<Collapse open>Collapse</Collapse>)

    const collapse = await screen.findByText("Collapse")

    await waitFor(() => expect(collapse).toHaveStyle({ opacity: "1" }))
  })

  test("no opacity when animationOpacity set to false", async () => {
    render(
      <Collapse animationOpacity={false} open>
        Collapse
      </Collapse>,
    )

    const collapse = await screen.findByText("Collapse")

    await waitFor(() => expect(collapse).not.toHaveStyle({ opacity: "1" }))
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

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })
    const collapse = await screen.findByText("Collapse")
    await waitFor(() => expect(collapse).toHaveStyle({ height: "50px" }))

    await user.click(button)
    await waitFor(() => expect(collapse).toHaveStyle({ height: "200px" }))
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

    const { user } = render(<TestComponent />)

    expect(screen.queryByText("Collapse")).toBeNull()

    const button = await screen.findByRole("button", { name: /button/i })

    await user.click(button)
    await waitFor(() => expect(screen.getByText("Collapse")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByText("Collapse")).toBeNull())
  })
})
