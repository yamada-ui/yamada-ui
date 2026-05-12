import { a11y } from "#test"
import { Wrap } from "./wrap"

describe("<Wrap />", () => {
  test("renders component correctly", async () => {
    await a11y(<Wrap>Wrap</Wrap>)
  })
})
