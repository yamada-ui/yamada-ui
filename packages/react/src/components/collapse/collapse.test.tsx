import { useState } from "react"
import { a11y, render, screen, waitFor } from "../../../test"
import { Collapse } from "./collapse"

describe("<Collapse />", () => {
  test("passes a11y test", async () => {
    await a11y(<Collapse />)
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

    const button = await screen.findByRole("button", { name: /button/i })
    const collapse = await screen.findByText("Collapse")
    expect(collapse).not.toBeVisible()

    await user.click(button)
    await waitFor(() => expect(collapse).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(collapse).not.toBeVisible())
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
