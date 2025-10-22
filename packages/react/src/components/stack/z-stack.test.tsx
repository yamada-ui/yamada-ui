import { a11y } from "#test"
import { Box } from "../box"
import { ZStack } from "./z-stack"

describe("<ZStack />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <ZStack>
        <Box>ZStack Item</Box>
      </ZStack>,
    )
  })
})
