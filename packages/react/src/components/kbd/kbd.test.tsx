import { a11y } from "#test"
import { Kbd } from "./"

describe("<Kbd />", () => {
  test("renders component correctly", async () => {
    await a11y(<Kbd>enter</Kbd>)
  })
})
