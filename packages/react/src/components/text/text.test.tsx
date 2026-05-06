import { a11y } from "#test"
import { Text } from "./text"

describe("<Text />", () => {
  test("renders component correctly", async () => {
    await a11y(<Text>Text</Text>)
  })
})
