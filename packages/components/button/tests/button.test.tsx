import { a11y, render, screen } from "@yamada-ui/test"
import { Button } from "../src"

describe("<Button />", () => {
  test("passes a11y test", async () => {
    await a11y(<Button>test</Button>)
  })

  test("renders with icon", () => {
    const { getByText, rerender } = render(<Button endIcon={<>end icon</>} />)
    expect(getByText("end icon")).toBeTruthy()

    rerender(<Button startIcon={<>start icon</>} />)
    expect(getByText("start icon")).toBeTruthy()
  })

  test("shows loading text if loading, loadingText and loadingIcon", () => {
    const { getByTestId, rerender } = render(
      <Button
        data-testid="btn"
        loading
        loadingIcon={<>loading start</>}
        loadingText="Submitting"
      >
        Submit
      </Button>,
    )
    expect(getByTestId("btn")).toHaveAttribute("data-loading", "")

    expect(getByTestId("btn")).toHaveAttribute("aria-busy", "true")

    // children text is hidden
    expect(screen.queryByText("Submit")).toBeNull()

    // Submitting" visually hidden label shown
    expect(screen.getByText("Submitting")).toBeInTheDocument()

    // Confirm loading position
    expect(screen.getByText(/loading start/i)).toHaveClass(
      "ui-button__loading--start",
    )

    rerender(
      <Button
        loading
        loadingIcon={<>loading end</>}
        loadingPlacement="end"
        loadingText="Test if loading placement"
      >
        Submit
      </Button>,
    )

    expect(screen.getByText(/loading end/i)).toHaveClass(
      "ui-button__loading--end",
    )
  })

  test("has the proper aria attributes", () => {
    const { getByTestId, rerender } = render(
      <Button data-testid="btn">Hello</Button>,
    )

    const button = getByTestId("btn")

    expect(button).not.toHaveAttribute("data-loading", "")
    expect(button).not.toHaveAttribute("data-active", "")

    // loading sets data-loading=""
    rerender(<Button loading>Hello</Button>)
    expect(button).toHaveAttribute("data-loading", "")

    // active sets data-active=""
    rerender(<Button active>Hello</Button>)
    expect(button).toHaveAttribute("data-active", "")
  })

  test("has the proper type attribute", () => {
    const { getByTestId, rerender } = render(
      <Button data-testid="btn">Submit</Button>,
    )
    expect(getByTestId("btn")).toHaveAttribute("type", "button")

    rerender(
      <Button type="submit" data-testid="btn">
        Submit
      </Button>,
    )
    expect(getByTestId("btn")).toHaveAttribute("type", "submit")

    rerender(
      <Button as="button" data-testid="btn">
        Submit
      </Button>,
    )
    expect(getByTestId("btn")).toHaveAttribute("type")
  })

  test("has no the type", () => {
    const { getByTestId } = render(
      <Button as="span" data-testid="btn">
        Submit
      </Button>,
    )
    expect(getByTestId("btn")).not.toHaveAttribute("type")
  })

  test("should be disabled", () => {
    const { getByRole, getByTestId, rerender } = render(
      <Button data-testid="btn" disabled>
        Invalid Button
      </Button>,
    )
    const button = getByRole("button")
    expect(button).toBeDisabled()

    rerender(
      <Button as="div" data-testid="btn" disabled>
        Invalid Button
      </Button>,
    )

    const buttonAsDiv = getByTestId("btn")
    expect(buttonAsDiv).toHaveAttribute("disabled")
  })
})
