import { a11y } from "#test"
import { Bleed } from "./bleed"

describe("<Bleed />", () => {
  test("renders component correctly", async () => {
    await a11y(<Bleed>Box</Bleed>)
  })
})
