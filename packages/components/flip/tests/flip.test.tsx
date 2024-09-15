import { a11y } from "@yamada-ui/test"
import { Flip } from "../src"

describe("<Flip />", () => {
  test("Flip renders correctly", async () => {
    await a11y(<Flip />)
  })
})
