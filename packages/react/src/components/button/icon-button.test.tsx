import { a11y, render, screen } from "#test"
import { BoxIcon } from "../icon"
import { IconButton } from "./icon-button"

describe("<IconButton />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <IconButton
        colorScheme="primary"
        aria-label="Open menu"
        icon={<BoxIcon />}
      />,
    )
  })

  test("renders children correctly", () => {
    render(
      <IconButton colorScheme="primary" aria-label="Open menu">
        <BoxIcon data-testid="icon" />
      </IconButton>,
    )

    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })
})
