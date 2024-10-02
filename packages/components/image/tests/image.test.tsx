import { a11y, act, render, screen } from "@yamada-ui/test"
import { Image } from "../src"

const src = "https://image.xyz/source"
const fallback = "https://image.xyz/placeholder"

let imageOnload: any = null

const trackImageOnload = () => {
  Object.defineProperty(window.Image.prototype, "onload", {
    get() {
      return this._onload
    },

    set(func) {
      imageOnload = func
      this._onload = func
    },
  })
}

describe("<Image />", () => {
  test("creates an instance of Image when mounted", () => {
    render(<Image fallback={fallback} src={src} />)

    expect(screen.getByRole("img")).toBeInstanceOf(HTMLImageElement)
  })

  test("passes a11y test", async () => {
    await a11y(<Image alt="img" fallback={fallback} src={src} />)
  })

  test("renders placeholder first, before image load", async () => {
    render(<Image fallback={fallback} src={src} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", fallback)
  })

  test("renders image if there is no fallback behavior defined", async () => {
    render(<Image src={src} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", src)
  })

  test("fires onload", () => {
    trackImageOnload()

    const onLoad = vi.fn()

    render(<Image fallback={fallback} src={src} onLoad={onLoad} />)

    act(() => {
      imageOnload()
    })

    expect(screen.getByRole("img")).toHaveAttribute("src", src)
    expect(onLoad).toHaveBeenCalledWith(undefined)
  })
})
