import { a11y, render, screen } from "#test"
import { ShoppingCartIcon } from "../icon"
import { EmptyState } from "./"

describe("<EmptyState />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <EmptyState.Root
        description="Explore our products and add items to your cart"
        title="Your cart is empty"
      />,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(EmptyState.Root.displayName).toBe("EmptyStateRoot")
    expect(EmptyState.Title.displayName).toBe("EmptyStateTitle")
    expect(EmptyState.Description.displayName).toBe("EmptyStateDescription")
    expect(EmptyState.Indicator.displayName).toBe("EmptyStateIndicator")
  })

  test("sets `className` correctly", () => {
    render(
      <EmptyState.Root data-testid="root">
        <EmptyState.Indicator data-testid="indicator">
          <ShoppingCartIcon />
        </EmptyState.Indicator>
        <EmptyState.Title data-testid="title">
          Your cart is empty
        </EmptyState.Title>
        <EmptyState.Description data-testid="description">
          Explore our products and add items to your cart
        </EmptyState.Description>
      </EmptyState.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-empty-state__root")
    expect(screen.getByTestId("indicator")).toHaveClass(
      "ui-empty-state__indicator",
    )
    expect(screen.getByTestId("title")).toHaveClass("ui-empty-state__title")
    expect(screen.getByTestId("description")).toHaveClass(
      "ui-empty-state__description",
    )
  })

  test("renders HTML tag correctly", () => {
    render(
      <EmptyState.Root data-testid="root">
        <EmptyState.Indicator data-testid="indicator">
          <ShoppingCartIcon />
        </EmptyState.Indicator>
        <EmptyState.Title data-testid="title">
          Your cart is empty
        </EmptyState.Title>
        <EmptyState.Description data-testid="description">
          Explore our products and add items to your cart
        </EmptyState.Description>
      </EmptyState.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("indicator").tagName).toBe("DIV")
    expect(screen.getByTestId("title").tagName).toBe("H3")
    expect(screen.getByTestId("description").tagName).toBe("P")
  })

  test("renders correctly with a given title", () => {
    const title = "Cart is empty"

    render(<EmptyState.Root data-testid="empty-state" title={title} />)

    const emptyState = screen.getByTestId("empty-state")
    expect(emptyState).toBeInTheDocument()

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(title)
  })

  test("renders correctly with a given title and description", () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"

    render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        title={title}
      />,
    )

    const emptyState = screen.getByTestId("empty-state")
    expect(emptyState).toBeInTheDocument()

    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(title)

    expect(screen.getByText(description)).toBeInTheDocument()
  })

  test("renders correctly with a given title, description and indicator", () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    const SvgIcon = <ShoppingCartIcon data-testid="indicator-icon" />

    render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        indicator={SvgIcon}
        title={title}
      />,
    )

    expect(screen.getByTestId("empty-state")).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(title)
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByTestId("indicator-icon")).toBeInTheDocument()
  })

  test("renders correctly with a given title, description, indicator and children", () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    const buttonCaption = "Back to home"

    render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        indicator={<ShoppingCartIcon data-testid="indicator-icon" />}
        title={title}
      >
        <button>{buttonCaption}</button>
      </EmptyState.Root>,
    )

    expect(screen.getByTestId("empty-state")).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(title)
    expect(screen.getByText(description)).toBeInTheDocument()
    expect(screen.getByTestId("indicator-icon")).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: buttonCaption }),
    ).toBeInTheDocument()
  })

  test("does not render title when title prop is not provided", () => {
    const description = "Please add items to the cart"

    render(
      <EmptyState.Root data-testid="empty-state" description={description} />,
    )

    expect(screen.getByTestId("empty-state")).toBeInTheDocument()
    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  test("does not render description when description prop is not provided", () => {
    const title = "Cart is empty"

    render(<EmptyState.Root data-testid="empty-state" title={title} />)

    expect(screen.getByTestId("empty-state")).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(title)
    expect(screen.queryByRole("paragraph")).not.toBeInTheDocument()
  })
})
