import { useState } from "react"
import { vi } from "vitest"
import { a11y, page, render } from "#test/browser"
import { FadeScale } from "./fade-scale"

describe("<FadeScale />", () => {
  const expectFadeScaleToBeVisible = async () => {
    await vi.waitFor(async () => {
      await expect.element(page.getByText("FadeScale")).toBeVisible()
    })
  }

  const expectFadeScaleToBeHidden = async () => {
    await vi.waitFor(async () => {
      await expect.element(page.getByText("FadeScale")).toHaveStyle({
        opacity: "0",
      })
    })
  }

  const expectFadeScaleNotToBeInTheDocument = async () => {
    await vi.waitFor(async () => {
      await expect
        .element(page.getByText("FadeScale").query())
        .not.toBeInTheDocument()
    })
  }

  test("renders component correctly", async () => {
    await a11y(<FadeScale />)
  })

  test("sets `displayName` correctly", () => {
    expect(FadeScale.displayName).toBe("FadeScale")
  })

  test("sets `className` correctly", async () => {
    await render(<FadeScale>FadeScale</FadeScale>)
    await expect
      .element(page.getByText("FadeScale"))
      .toHaveClass("ui-fade-scale")
  })

  test("renders HTML tag correctly", async () => {
    await render(<FadeScale>FadeScale</FadeScale>)
    expect(page.getByText("FadeScale").element().tagName).toBe("DIV")
  })

  test("toggles visibility on open change", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <FadeScale open={open}>FadeScale</FadeScale>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    await expectFadeScaleToBeHidden()

    await user.click(button)
    await expectFadeScaleToBeVisible()

    await user.click(button)
    await expectFadeScaleToBeHidden()
  })

  test("applies reverse={false} exit correctly", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <FadeScale open={open} reverse={false}>
            FadeScale
          </FadeScale>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })
    await expectFadeScaleToBeHidden()

    await user.click(button)
    await expectFadeScaleToBeVisible()

    await user.click(button)
    await expectFadeScaleToBeHidden()
  })

  test("unmountOnExit works correctly", async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <button onClick={() => setOpen((prev) => !prev)}>button</button>
          <FadeScale open={open} unmountOnExit>
            FadeScale
          </FadeScale>
        </>
      )
    }

    const { user } = await render(<TestComponent />)

    const button = page.getByRole("button", { name: /button/i })

    await expectFadeScaleNotToBeInTheDocument()

    await user.click(button)
    await expectFadeScaleToBeVisible()

    await user.click(button)
    await expectFadeScaleNotToBeInTheDocument()
  })
})
