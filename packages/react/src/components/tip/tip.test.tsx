import { a11y } from "#test"
import { Tip } from "./tip"

describe("<Tip />", () => {
  test("renders component correctly", async () => {
    await a11y(<Tip content="More information" open />)
  })
})
