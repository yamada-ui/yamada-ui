import { a11y } from "#test"
import { Heading } from "./heading"

describe("<Heading />", () => {
  test("renders component correctly", async () => {
    await a11y(<Heading>Heading</Heading>)
  })
})
