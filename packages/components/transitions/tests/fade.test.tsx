import { render } from "@yamada-ui/test"
import { Fade } from "../src"

describe("<Fade />", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Fade>Test</Fade>)

    getByText("Test")
  })
})
