import { a11y } from "#test"
import { Mark } from "./"

describe("<Mark />", () => {
  test("renders component correctly", async () => {
    await a11y(<Mark>Mark</Mark>)
  })
})
