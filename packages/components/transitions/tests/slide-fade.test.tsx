import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { SlideFade } from "../src"

describe("<SlideFade />", () => {
  test("passes a11y test", async () => {
    await a11y(<SlideFade />)
  })

  test("fade-in and fade-out work correctly", async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>button</button>
          <SlideFade open={isOpen}>SlideFade</SlideFade>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })
    const slideFade = await screen.findByText("SlideFade")
    expect(slideFade).not.toBeVisible()

    await user.click(button)
    await waitFor(() => expect(slideFade).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(slideFade).not.toBeVisible())
  })

  test("fade-in and fade-out work correctly when `initial` is passed to an `initial` property", async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>button</button>
          <SlideFade initial="initial" open={isOpen}>
            SlideFade
          </SlideFade>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })
    const slideFade = await screen.findByText("SlideFade")
    expect(slideFade).not.toBeVisible()

    await user.click(button)
    await waitFor(() => expect(slideFade).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(slideFade).not.toBeVisible())
  })

  test("default offset is set correctly", async () => {
    render(<SlideFade>SlideFade</SlideFade>)

    const slideFade = await screen.findByText("SlideFade")

    expect(slideFade).toHaveStyle({
      transform: "translateY(8px)",
    })
  })

  test("applies offsetX correctly", async () => {
    render(<SlideFade offsetX={10}>SlideFade</SlideFade>)

    const slideFade = await screen.findByText("SlideFade")

    expect(slideFade).toHaveStyle({
      transform: "translateX(10px) translateY(8px)",
    })
  })

  test("applies offsetY correctly", async () => {
    render(<SlideFade offsetY={10}>SlideFade</SlideFade>)

    const slideFade = await screen.findByText("SlideFade")

    expect(slideFade).toHaveStyle({
      transform: "translateY(10px)",
    })
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>button</button>
          <SlideFade open={isOpen} unmountOnExit>
            SlideFade
          </SlideFade>
        </>
      )
    }

    const { user } = render(<TestComponent />)

    const button = await screen.findByRole("button", { name: /button/i })

    expect(screen.queryByText("SlideFade")).toBeNull()

    await user.click(button)
    await waitFor(() => expect(screen.getByText("SlideFade")).toBeVisible())

    await user.click(button)
    await waitFor(() => expect(screen.queryByText("SlideFade")).toBeNull())
  })
})
