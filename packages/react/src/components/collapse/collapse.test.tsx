import { a11y } from "#test"
import { Collapse } from "./collapse"

describe("<Collapse />", () => {
  test("renders component correctly", async () => {
    await a11y(<Collapse />)
  })
})
