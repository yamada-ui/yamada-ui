import type { FC } from "react"
import { page, render, renderHook } from "#test/browser"
import { useMediaQuery } from "."
import { styled } from "../../core"

describe("useMediaQuery", () => {
  afterEach(async () => {
    await page.viewport(1280, 720)
  })

  test("returns true when media query matches", async () => {
    await page.viewport(800, 600)

    const { result } = await renderHook(() =>
      useMediaQuery("(max-width: 1024px)"),
    )

    expect(result.current).toBeTruthy()
  })

  test("returns false when media query does not match", async () => {
    await page.viewport(1280, 720)

    const { result } = await renderHook(() =>
      useMediaQuery("(max-width: 600px)"),
    )

    expect(result.current).toBeFalsy()
  })

  test("updates when viewport changes to match the query", async () => {
    await page.viewport(1280, 720)

    const Component: FC = () => {
      const matches = useMediaQuery("(max-width: 800px)")

      return <styled.p data-testid="mq">{String(matches)}</styled.p>
    }

    await render(<Component />)

    await expect.element(page.getByTestId("mq")).toHaveTextContent("false")

    await page.viewport(600, 400)

    await expect
      .element(page.getByTestId("mq"), { timeout: 5000 })
      .toHaveTextContent("true")
  })
})
