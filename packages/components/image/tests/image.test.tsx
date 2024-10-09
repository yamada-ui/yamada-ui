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
    render(<Image src={src} fallback={fallback} />)

    expect(screen.getByRole("img")).toBeInstanceOf(HTMLImageElement)
  })

  test("passes a11y test", async () => {
    await a11y(<Image src={src} alt="img" fallback={fallback} />)
  })

  test("renders placeholder first, before image load", () => {
    render(<Image src={src} fallback={fallback} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", fallback)
  })

  test("renders image if there is no fallback behavior defined", () => {
    render(<Image src={src} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", src)
  })

  test("fires onload", () => {
    trackImageOnload()

    const onLoad = vi.fn()

    render(<Image src={src} fallback={fallback} onLoad={onLoad} />)

    act(() => {
      imageOnload()
    })

    expect(screen.getByRole("img")).toHaveAttribute("src", src)
    expect(onLoad).toHaveBeenCalledWith(undefined)
  })
})
