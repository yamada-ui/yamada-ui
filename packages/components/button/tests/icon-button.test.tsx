import { a11y, render, TestIcon } from "@yamada-ui/test"
import { IconButton } from "../src"

describe("<IconButton />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <IconButton
        colorScheme="primary"
        aria-label="Open menu"
        icon={<TestIcon />}
      />,
    )
  })

  test("renders children correctly", () => {
    const { getByTestId } = render(
      <IconButton colorScheme="primary" aria-label="Open menu">
        <TestIcon data-testid="icon" />
      </IconButton>,
    )

    expect(getByTestId("icon")).toBeInTheDocument()
  })
})
