import { a11y, render, waitFor, screen } from "@yamada-ui/test"
import { useState } from "react"
import { Collapse } from "../src"

describe("<Collapse />", () => {
  test("passes a11y test", async () => {
    await a11y(<Collapse />)
  })

  test("toggles visibility on isOpen change", async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>button</button>
          <Collapse isOpen={isOpen}>Collapse</Collapse>
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
    render(<Collapse isOpen>Collapse</Collapse>)

    const collapse = await screen.findByText("Collapse")

    await waitFor(() => expect(collapse).toHaveStyle({ opacity: "1" }))
  })

  test("no opacity when animationOpacity set to false", async () => {
    render(
      <Collapse isOpen animationOpacity={false}>
        Collapse
      </Collapse>,
    )

    const collapse = await screen.findByText("Collapse")

    await waitFor(() => expect(collapse).not.toHaveStyle({ opacity: "1" }))
  })

  test("height changes correctly after isOpen set to true", async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>button</button>
          <Collapse startingHeight={50} endingHeight={200} isOpen={isOpen}>
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
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>button</button>
          <Collapse isOpen={isOpen} unmountOnExit>
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
