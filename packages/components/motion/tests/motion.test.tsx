import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { useState } from "react"
import { AnimatePresence, Motion } from "../src"

describe("<Motion />", () => {
  test("Motion renders correctly", async () => {
    await a11y(<Motion />)
  })

  test("Motion renders correctly with div", () => {
    const { container } = render(<Motion />)
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement)
  })

  test("Motion renders correctly with initial", () => {
    render(<Motion initial={{ opacity: 0, x: 10 }}>Motion</Motion>)
    expect(screen.queryByText("Motion")).toHaveStyle(
      "transform: translateX(10px);",
    )
  })

  test("Motion renders correctly with animate", async () => {
    render(
      <Motion animate={{ opacity: 1, x: 100 }} initial={{ opacity: 0, x: 10 }}>
        Motion
      </Motion>,
    )
    await waitFor(() => {
      expect(screen.queryByText("Motion")).toHaveStyle(
        "transform: translateX(100px);",
      )
    })
  })

  test("Motion renders correctly with exit and transition", async () => {
    const MotionExample = () => {
      const [isVisible, setIsVisible] = useState(false)
      return (
        <>
          <button onClick={() => setIsVisible((prev) => !prev)}>click</button>
          <AnimatePresence>
            {isVisible ? (
              <Motion
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                Motion
              </Motion>
            ) : null}
          </AnimatePresence>
        </>
      )
    }

    const { user } = render(<MotionExample />)

    const toggleButton = screen.getByRole("button", { name: /click/i })

    await user.click(toggleButton)
    await waitFor(() => {
      expect(screen.queryByText("Motion")).toHaveStyle({ opacity: "1" })
    })

    await user.click(toggleButton)
    await waitFor(
      () => {
        expect(screen.queryByText("Motion")).toHaveStyle({ opacity: "0" })
      },
      { timeout: 300 },
    )
  })
})
