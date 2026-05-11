import { a11y } from "#test"
import { Code } from "./code"

describe("<Code />", () => {
  test("renders component correctly", async () => {
    await a11y(<Code>console.log("Hello, Yamada!")</Code>)
  })
})
