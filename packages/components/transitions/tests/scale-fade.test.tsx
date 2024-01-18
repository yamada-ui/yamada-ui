import { render } from "@yamada-ui/test"
import { ScaleFade } from "../src"

describe("<ScaleFade />", () => {
  test("renders correctly", async () => {
    const { getByText } = render(<ScaleFade>Test</ScaleFade>)

    getByText("Test")
  })
})
