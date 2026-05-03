import { a11y, page, render } from "#test/browser"
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

  test("sets `displayName` correctly", () => {
    expect(IconButton.displayName).toBe("IconButton")
  })

  test("sets `className` correctly", async () => {
    await render(<IconButton colorScheme="primary" aria-label="Open menu" />)

    await expect.element(page.getByRole("button")).toHaveClass("ui-icon-button")
  })

  test("renders HTML tag correctly", async () => {
    await render(<IconButton colorScheme="primary" aria-label="Open menu" />)

    expect(page.getByRole("button").element().tagName).toBe("BUTTON")
  })

  test("renders children correctly", async () => {
    await render(
      <IconButton colorScheme="primary" aria-label="Open menu">
        <BoxIcon data-testid="icon" />
      </IconButton>,
    )

    await expect.element(page.getByTestId("icon")).toBeInTheDocument()
  })
})
