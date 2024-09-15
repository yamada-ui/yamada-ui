import { a11y } from "@yamada-ui/test"
import { Airy } from "../src"

describe("<Airy />", () => {
  test("Airy renders correctly", async () => {
    await a11y(<Airy />)
  })
})
