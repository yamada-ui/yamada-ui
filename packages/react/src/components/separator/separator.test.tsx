import { a11y } from "#test"
import { Separator } from "./separator"

describe("<Separator />", () => {
  test("renders component correctly", async () => {
    await a11y(<Separator />)
  })
})
