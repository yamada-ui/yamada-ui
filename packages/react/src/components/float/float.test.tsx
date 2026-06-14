import { a11y } from "#test"
import { Box } from "../box"
import { Float } from "./"

describe("<Float />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Box position="relative">
        <Float>New</Float>
      </Box>,
    )
  })
})
