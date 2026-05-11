import { a11y } from "#test"
import { Center } from "./center"

describe("<Center />", () => {
  test("renders component correctly", async () => {
    await a11y(<Center>Center</Center>)
  })
})
