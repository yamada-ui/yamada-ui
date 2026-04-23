import { a11y, page, render } from "#test/browser"
import { LoaderIcon } from "../icon"
import { Button } from "./button"

describe("<Button />", () => {
  test("renders component correctly", async () => {
    await a11y(<Button>test</Button>)
  })

  test("sets `displayName` correctly", () => {
    expect(Button.displayName).toBe("Button")
  })

  test("sets `className` correctly", async () => {
    await render(<Button>test</Button>)

    const button = page.getByText("test")
    await expect.element(button).toHaveClass("ui-button")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Button>test</Button>)

    const button = page.getByText("test")
    expect(button.element().tagName).toBe("BUTTON")
  })

  test("renders with icon", async () => {
    const { rerender } = await render(<Button endIcon={<>end icon</>} />)
    await expect.element(page.getByText("end icon")).toBeInTheDocument()

    await rerender(<Button startIcon={<>start icon</>} />)
    await expect.element(page.getByText("start icon")).toBeInTheDocument()
  })

  test("shows loading text if loading, loadingText and loadingIcon", async () => {
    const { rerender } = await render(
      <Button
        data-testid="btn"
        loading
        loadingIcon={<LoaderIcon data-testid="loadingIcon" />}
        loadingMessage="Submitting"
      >
        Submit
      </Button>,
    )
    await expect
      .element(page.getByTestId("btn"))
      .toHaveAttribute("data-loading", "")

    // children text is hidden
    await expect
      .element(page.getByText(/^Submit$/).query())
      .not.toBeInTheDocument()

    // Submitting" visually hidden label shown
    await expect.element(page.getByText("Submitting")).toBeInTheDocument()

    // Confirm loading position
    await expect
      .element(page.getByTestId("loadingIcon"))
      .toHaveClass("ui-button__loading--start")

    await rerender(
      <Button
        loading
        loadingIcon={<LoaderIcon data-testid="loadingIcon" />}
        loadingMessage="Test if loading placement"
        loadingPlacement="end"
      >
        Submit
      </Button>,
    )

    await expect
      .element(page.getByTestId("loadingIcon"))
      .toHaveClass("ui-button__loading--end")
  })

  test("has the proper aria attributes", async () => {
    const { rerender } = await render(<Button data-testid="btn">Hello</Button>)

    const button = page.getByTestId("btn")

    await expect.element(button).not.toHaveAttribute("data-loading", "")
    await expect.element(button).not.toHaveAttribute("data-active", "")

    // loading sets data-loading=""
    await rerender(
      <Button data-testid="btn" loading>
        Hello
      </Button>,
    )
    await expect
      .element(page.getByTestId("btn"))
      .toHaveAttribute("data-loading", "")

    // active sets data-active=""
    await rerender(
      <Button data-testid="btn" active>
        Hello
      </Button>,
    )
    await expect
      .element(page.getByTestId("btn"))
      .toHaveAttribute("data-active", "")
  })

  test("has the proper type attribute", async () => {
    const { rerender } = await render(<Button data-testid="btn">Submit</Button>)
    await expect
      .element(page.getByTestId("btn"))
      .toHaveAttribute("type", "button")

    await rerender(
      <Button type="submit" data-testid="btn">
        Submit
      </Button>,
    )
    await expect
      .element(page.getByTestId("btn"))
      .toHaveAttribute("type", "submit")

    await rerender(<Button data-testid="btn">Submit</Button>)
    await expect.element(page.getByTestId("btn")).toHaveAttribute("type")
  })

  test("has no the type", async () => {
    await render(
      <Button as="span" data-testid="btn">
        Submit
      </Button>,
    )
    await expect.element(page.getByTestId("btn")).not.toHaveAttribute("type")
  })

  test("should be disabled", async () => {
    const { rerender } = await render(
      <Button data-testid="btn" disabled>
        Invalid Button
      </Button>,
    )
    await expect.element(page.getByRole("button")).toBeDisabled()

    await rerender(
      <Button as="div" data-testid="btn" disabled>
        Invalid Button
      </Button>,
    )

    await expect.element(page.getByTestId("btn")).toHaveAttribute("disabled")
  })
})
