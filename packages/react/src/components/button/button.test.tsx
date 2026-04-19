import { a11y, render } from "#test/browser"
import { screen } from "@testing-library/react"
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
    expect(screen.getByText("test")).toHaveClass("ui-button")
  })

  test("renders HTML tag correctly", async () => {
    await render(<Button>test</Button>)
    expect(screen.getByText("test").tagName).toBe("BUTTON")
  })

  test("renders with icon", async () => {
    const { getByText, rerender } = await render(
      <Button endIcon={<>end icon</>} />,
    )
    expect(getByText("end icon")).toBeTruthy()

    await rerender(<Button startIcon={<>start icon</>} />)
    expect(getByText("start icon")).toBeTruthy()
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
    expect(screen.getByTestId("btn")).toHaveAttribute("data-loading", "")

    // children text is hidden
    expect(screen.queryByText("Submit")).toBeNull()

    // Submitting" visually hidden label shown
    expect(screen.getByText("Submitting")).toBeInTheDocument()

    // Confirm loading position
    expect(screen.getByTestId("loadingIcon")).toHaveClass(
      "ui-button__loading--start",
    )

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

    expect(screen.getByTestId("loadingIcon")).toHaveClass(
      "ui-button__loading--end",
    )
  })

  test("has the proper aria attributes", async () => {
    const { rerender } = await render(<Button data-testid="btn">Hello</Button>)

    const button = screen.getByTestId("btn")

    expect(button).not.toHaveAttribute("data-loading", "")
    expect(button).not.toHaveAttribute("data-active", "")

    // loading sets data-loading=""
    await rerender(
      <Button data-testid="btn" loading>
        Hello
      </Button>,
    )
    expect(screen.getByTestId("btn")).toHaveAttribute("data-loading", "")

    // active sets data-active=""
    await rerender(
      <Button data-testid="btn" active>
        Hello
      </Button>,
    )
    expect(screen.getByTestId("btn")).toHaveAttribute("data-active", "")
  })

  test("has the proper type attribute", async () => {
    const { rerender } = await render(<Button data-testid="btn">Submit</Button>)
    expect(screen.getByTestId("btn")).toHaveAttribute("type", "button")

    await rerender(
      <Button type="submit" data-testid="btn">
        Submit
      </Button>,
    )
    expect(screen.getByTestId("btn")).toHaveAttribute("type", "submit")

    await rerender(<Button data-testid="btn">Submit</Button>)
    expect(screen.getByTestId("btn")).toHaveAttribute("type")
  })

  test("has no the type", async () => {
    await render(
      <Button as="span" data-testid="btn">
        Submit
      </Button>,
    )
    expect(screen.getByTestId("btn")).not.toHaveAttribute("type")
  })

  test("should be disabled", async () => {
    const { getByRole, getByTestId, rerender } = await render(
      <Button data-testid="btn" disabled>
        Invalid Button
      </Button>,
    )
    const button = getByRole("button")
    expect(button).toBeDisabled()

    await rerender(
      <Button as="div" data-testid="btn" disabled>
        Invalid Button
      </Button>,
    )

    const buttonAsDiv = getByTestId("btn")
    expect(buttonAsDiv).toHaveAttribute("disabled")
  })
})
