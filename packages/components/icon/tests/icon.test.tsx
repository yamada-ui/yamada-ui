import { a11y } from "@yamada-ui/test"
import { Icon } from "../src"

describe("<Icon/>", () => {
  test("passes a11y test", async () => {
    await a11y(<Icon />)
  })
})
