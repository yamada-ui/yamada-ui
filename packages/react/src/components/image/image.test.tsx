import { a11y, render, screen } from "#test"
import { Image } from "./image"

const src = "https://image.xyz/source"

describe("<Image />", () => {
  test("sets `displayName` correctly", () => {
    expect(Image.displayName).toBe("Image")
  })

  test("sets `className` correctly", () => {
    render(<Image src={src} alt="image" />)

    expect(screen.getByRole("img")).toHaveClass("ui-image")
  })

  test("renders html tag correctly", () => {
    render(<Image src={src} alt="image" />)

    expect(screen.getByRole("img")).toBeInstanceOf(HTMLImageElement)
  })

  test("renders component correctly", async () => {
    await a11y(<Image src={src} alt="image" />)
  })

  test("renders image if there is no fallback behavior defined", () => {
    render(<Image src={src} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", src)
  })
})
