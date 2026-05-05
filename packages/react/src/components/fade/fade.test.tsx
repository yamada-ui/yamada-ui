import { a11y } from "#test"
import { Fade } from "./fade"

describe("<Fade />", () => {
  test("renders component correctly", async () => {
    await a11y(<Fade />)
  })
})
