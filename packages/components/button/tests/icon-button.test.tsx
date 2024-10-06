import { ChevronIcon } from "@yamada-ui/icon"
import { a11y, render } from "@yamada-ui/test"
import { IconButton } from "../src"

describe("<IconButton />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <IconButton
        colorScheme="primary"
        icon={<ChevronIcon />}
        aria-label="Open menu"
      />,
    )
  })

  test("renders children correctly", () => {
    const { getByTestId } = render(
      <IconButton colorScheme="primary" aria-label="Open menu">
        <ChevronIcon data-testid="icon" />
      </IconButton>,
    )

    expect(getByTestId("icon")).toBeInTheDocument()
  })
})
