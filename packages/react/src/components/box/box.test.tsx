import { a11y } from "#test"
import { Box } from "./box"

describe("<Box />", () => {
  test("renders component correctly", async () => {
    await a11y(<Box>Box</Box>)
  })
})
