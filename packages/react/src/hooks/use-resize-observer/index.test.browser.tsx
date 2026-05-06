import type { FC } from "react"
import { page, render } from "#test/browser"
import { useResizeObserver } from "./"

describe("useResizeObserver", () => {
  const ButtonWithSize: FC = () => {
    const [ref, rect] = useResizeObserver()

    return (
      <button ref={ref} style={{ blockSize: 320, inlineSize: 400 }}>
        {rect.width} x {rect.height}
      </button>
    )
  }

  test("return contentRect value correctly", async () => {
    await render(<ButtonWithSize />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveTextContent("400 x 320")
  })
})
