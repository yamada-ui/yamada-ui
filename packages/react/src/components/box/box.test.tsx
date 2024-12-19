import { render, screen } from "../../../test"
import { a11y } from "../../../test"
import { Box } from "./box"

describe("<Box />", () => {
  test("passes a11y test", async () => {
    await a11y(<Box>Box</Box>)
  })

  test("as - prop works correctly", () => {
    render(
      <Box as="a" href="www.google.com">
        Box
      </Box>,
    )

    expect(screen.getByRole("link", { name: /Box/i })).toBeInTheDocument()
  })
})
