import { a11y, render, screen, waitFor } from "@yamada-ui/test"
import { isValidElement, useState } from "react"
import { AnimatePresence, Motion } from "../src"
import { motion } from "../src"

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

describe("motion factory", () => {
  describe("apply handler", () => {
    test("creates component when called as a function", () => {
      const MotionDiv = motion("div")
      expect(MotionDiv).toBeDefined()
      expect(isValidElement(<MotionDiv />)).toBeTruthy()

      const { container } = render(<MotionDiv>Test</MotionDiv>)
      expect(container.firstChild).toBeInstanceOf(HTMLDivElement)
    })

    test("returns consistent components for same element type", () => {
      const MotionDiv1 = motion("div")
      const MotionDiv2 = motion("div")

      const { container: container1 } = render(<MotionDiv1>Test</MotionDiv1>)
      const { container: container2 } = render(<MotionDiv2>Test</MotionDiv2>)

      expect(container1.innerHTML).toBe(container2.innerHTML)
    })
  })

  describe("get handler", () => {
    test("creates component when accessed as a property", () => {
      const MotionDiv = motion.div
      const MotionSpan = motion.span

      const { container: divContainer } = render(<MotionDiv>Test</MotionDiv>)
      const { container: spanContainer } = render(<MotionSpan>Test</MotionSpan>)

      expect(divContainer.firstChild).toBeInstanceOf(HTMLDivElement)
      expect(spanContainer.firstChild).toBeInstanceOf(HTMLSpanElement)
    })

    test("caches and reuses components accessed as properties", () => {
      const MotionDiv1 = motion.div
      const MotionDiv2 = motion.div

      const { container: container1 } = render(<MotionDiv1>Test</MotionDiv1>)
      const { container: container2 } = render(<MotionDiv2>Test</MotionDiv2>)

      expect(container1.innerHTML).toBe(container2.innerHTML)
    })
  })
})
