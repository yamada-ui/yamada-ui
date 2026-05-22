import { a11y, render, screen } from "#test"
import { LoaderIcon } from "../icon"
import { Button } from "./button"

describe("<Button />", () => {
  test("renders component correctly", async () => {
    await a11y(<Button>test</Button>)
  })

  test("renders with icon", () => {
    const { rerender } = render(<Button endIcon={<>end icon</>} />)
    expect(screen.getByText("end icon")).toBeInTheDocument()

    rerender(<Button startIcon={<>start icon</>} />)
    expect(screen.getByText("start icon")).toBeInTheDocument()
  })

  test("shows loading text if loading, loadingText and loadingIcon", () => {
    const { rerender } = render(
      <Button
        data-testid="btn"
        loading
        loadingIcon={<LoaderIcon data-testid="loadingIcon" />}
        loadingMessage="Submitting"
      >
        Submit
      </Button>,
    )
    expect(screen.getByTestId("btn")).toHaveAttribute("data-loading", "")

    expect(screen.queryByText(/^Submit$/)).not.toBeInTheDocument()

    expect(screen.getByText("Submitting")).toBeInTheDocument()

    expect(screen.getByTestId("loadingIcon")).toHaveClass(
      "ui-button__loading--start",
    )

    rerender(
      <Button
        loading
        loadingIcon={<LoaderIcon data-testid="loadingIcon" />}
        loadingMessage="Test if loading placement"
        loadingPlacement="end"
      >
        Submit
      </Button>,
    )

    expect(screen.getByTestId("loadingIcon")).toHaveClass(
      "ui-button__loading--end",
    )
  })

  test("has the proper aria attributes", () => {
    const { rerender } = render(<Button data-testid="btn">Hello</Button>)

    const button = screen.getByTestId("btn")

    expect(button).not.toHaveAttribute("data-loading", "")
    expect(button).not.toHaveAttribute("data-active", "")

    rerender(
      <Button data-testid="btn" loading>
        Hello
      </Button>,
    )
    expect(screen.getByTestId("btn")).toHaveAttribute("data-loading", "")

    rerender(
      <Button data-testid="btn" active>
        Hello
      </Button>,
    )
    expect(screen.getByTestId("btn")).toHaveAttribute("data-active", "")
  })

  test("has the proper type attribute", () => {
    const { rerender } = render(<Button data-testid="btn">Submit</Button>)
    expect(screen.getByTestId("btn")).toHaveAttribute("type", "button")

    rerender(
      <Button type="submit" data-testid="btn">
        Submit
      </Button>,
    )
    expect(screen.getByTestId("btn")).toHaveAttribute("type", "submit")

    rerender(<Button data-testid="btn">Submit</Button>)
    expect(screen.getByTestId("btn")).toHaveAttribute("type")
  })

  test("has no the type", () => {
    render(
      <Button as="span" data-testid="btn">
        Submit
      </Button>,
    )
    expect(screen.getByTestId("btn")).not.toHaveAttribute("type")
  })

  test("should be disabled", () => {
    const { rerender } = render(
      <Button data-testid="btn" disabled>
        Invalid Button
      </Button>,
    )
    expect(screen.getByRole("button")).toBeDisabled()

    rerender(
      <Button as="div" data-testid="btn" disabled>
        Invalid Button
      </Button>,
    )

    expect(screen.getByTestId("btn")).toHaveAttribute("disabled")
  })
})
