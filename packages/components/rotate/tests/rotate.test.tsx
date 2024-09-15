import { a11y } from "@yamada-ui/test"
import { Rotate } from "../src"

describe("<Rotate />", () => {
  test("Rotate renders correctly", async () => {
    await a11y(<Rotate />)
  })
})
