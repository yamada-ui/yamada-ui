import { a11y, page, render } from "#test/browser"
import { Image } from "./image"

const src = "https://image.xyz/source"

describe("<Image />", () => {
  test("renders component correctly", async () => {
    await a11y(<Image src={src} alt="image" />)
  })

  test("sets `displayName` correctly", () => {
    expect(Image.displayName).toBe("Image")
  })

  test("sets `className` correctly", async () => {
    await render(<Image src={src} />)

    await expect.element(page.getByRole("img")).toHaveClass("ui-image")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Image src={src} />)

    const img = page.getByRole("img").element()

    expect(img).toBeInstanceOf(HTMLImageElement)
  })

  test("renders image if there is no fallback behavior defined", async () => {
    await render(<Image src={src} />)

    await expect.element(page.getByRole("img")).toHaveAttribute("src", src)
  })
})
