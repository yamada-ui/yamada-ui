import { render, screen } from "../../../test"
import { Image } from "./image"

const src = "https://image.xyz/source"

describe("<Image />", () => {
  test("renders image if there is no fallback behavior defined", () => {
    render(<Image src={src} />)

    expect(screen.getByRole("img")).toHaveAttribute("src", src)
  })
})
