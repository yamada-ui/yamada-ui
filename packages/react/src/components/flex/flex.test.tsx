import { a11y } from "#test"
import { Flex } from "./flex"

describe("<Flex />", () => {
  test("renders component correctly", async () => {
    await a11y(<Flex>Flex</Flex>)
  })
})
