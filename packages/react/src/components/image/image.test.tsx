import { a11y, render, screen } from "../../../test"
import { Image } from "./image"

const src = "https://image.xyz/source"

describe("<Image />", () => {
  test("passes a11y test", async () => {
    await a11y(<Image src={src} alt="image" />)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Image.displayName).toBe("Image")
    expect(Image.__ui__).toBe("Image")
  })

  test("sets `className` correctly", () => {
    render(<Image src={src} />)
    expect(screen.getByRole("img")).toHaveClass("ui-image")
  })

  test("renders HTML tag correctly", () => {
    render(<Image src={src} />)
    expect(screen.getByRole("img").tagName).toBe("IMG")
  })

  test("renders image if there is no fallback behavior defined", () => {
    render(<Image src={src} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", src)
  })
})
