import { a11y, render } from "../../../test"
import { BoxIcon } from "../icon"
import { IconButton } from "./icon-button"

describe("<IconButton />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <IconButton
        colorScheme="primary"
        aria-label="Open menu"
        icon={<BoxIcon />}
      />,
    )
  })

  test("renders children correctly", () => {
    const { getByTestId } = render(
      <IconButton colorScheme="primary" aria-label="Open menu">
        <BoxIcon data-testid="icon" />
      </IconButton>,
    )

    expect(getByTestId("icon")).toBeInTheDocument()
  })
})