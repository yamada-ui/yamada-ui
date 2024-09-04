import { a11y } from "@yamada-ui/test"
import { Swap } from "../src"

describe("<Swap />", () => {
  test("Swap renders correctly", async () => {
    await a11y(<Swap />)
  })
})
