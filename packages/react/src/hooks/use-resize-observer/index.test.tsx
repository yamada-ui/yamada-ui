import { page, render } from "#test/browser"
import { useElementSize, useResizeObserver } from "./"

describe("useResizeObserver", () => {
  const ButtonWithSize = () => {
    const [ref, rect] = useResizeObserver()

    return (
      <button ref={ref} style={{ blockSize: 320, inlineSize: 400 }}>
        {rect.width} x {rect.height}
      </button>
    )
  }

  test("return contentRect value correctly", async () => {
    render(<ButtonWithSize />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveTextContent("400 x 320")
  })
})

describe("useElementSize", () => {
  const ButtonWithSize = () => {
    const { ref, height, width } = useElementSize()

    return (
      <button ref={ref} style={{ blockSize: 200, inlineSize: 150 }}>
        {width} x {height}
      </button>
    )
  }

  test("returns width and height correctly", async () => {
    render(<ButtonWithSize />)

    const button = page.getByRole("button")
    await expect.element(button).toHaveTextContent("150 x 200")
  })
})
