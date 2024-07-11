import { AnimatePresence, Button, useBoolean } from "@yamada-ui/react"
import { render, a11y, screen, fireEvent, waitFor } from "@yamada-ui/test"
import { Motion } from "../src"

describe("<Motion />", () => {
  test("Motion renders correctly", async () => {
    await a11y(<Motion />)
  })

  test("Motion renders correctly with className", async () => {
    render(<Motion data-testid="motion" />)
    const container = screen.getByTestId("motion")
    expect(container).toHaveClass("ui-motion")
  })

  test("Motion renders correctly with div", async () => {
    const { container } = render(<Motion />)
    expect(container.firstChild).toBeInstanceOf(HTMLDivElement)
  })

  test("Motion renders correctly with initial", async () => {
    render(<Motion initial={{ x: 10, opacity: 0 }}>Motion</Motion>)
    await waitFor(() =>
      expect(screen.queryByText("Motion")).toHaveStyle({
        transform: "translateX(10px) translateZ(0)",
      }),
    )
  })

  test("Motion renders correctly with animate", async () => {
    render(
      <Motion initial={{ x: 10, opacity: 0 }} animate={{ x: 100, opacity: 1 }}>
        Motion
      </Motion>,
    )
    await waitFor(() => {
      expect(screen.queryByText("Motion")).toHaveStyle({
        transform: "translateX(100px) translateZ(0)",
      })
    })
  })

  test("Motion renders correctly with exit and transition", async () => {
    const MotionExpample = () => {
      const [isVisible, { toggle }] = useBoolean(false)
      return (
        <>
          <Button onClick={toggle}>click</Button>
          <AnimatePresence>
            {isVisible ? (
              <Motion
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                Motion
              </Motion>
            ) : null}
          </AnimatePresence>
        </>
      )
    }

    render(<MotionExpample />)

    const toggleButton = screen.getByRole("button")

    fireEvent.click(toggleButton)
    await waitFor(() => {
      expect(screen.queryByText("Motion")).toHaveStyle("opacity: 1")
    })

    fireEvent.click(toggleButton)
    await waitFor(
      () => {
        expect(screen.queryByText("Motion")).toHaveStyle("opacity: 0")
      },
      { timeout: 300 },
    )
  })
})
