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

  test("EmptyState renders correctly with a given title", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        title={title}
      />,
    )

    const EmptyStateComponent = await screen.findByTestId("empty-state")
    expect(EmptyStateComponent).toBeInTheDocument()

    const H3Component = screen.getByRole("heading", { level: 3 })
    expect(H3Component).toHaveTextContent(title)

    expect(EmptyStateComponent).toContainElement(H3Component)
  })

  test("EmptyState renders correctly with a given title and description", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"

    render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        title={title}
      />,
    )

    const EmptyStateComponent = await screen.findByTestId("empty-state")
    expect(EmptyStateComponent).toBeInTheDocument()

    const H3Component = screen.getByRole("heading", { level: 3 })
    expect(H3Component).toHaveTextContent(title)

    const ParagraphComponent = screen.getByText(description)
    expect(ParagraphComponent).toBeInTheDocument()

    expect(EmptyStateComponent).toContainElement(H3Component)
    expect(EmptyStateComponent).toContainElement(ParagraphComponent)
  })

  test("EmptyState renders correctly with a given title, description and indicator", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    const SvgIcon = <ShoppingCartIcon />
    render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        indicator={SvgIcon}
        title={title}
      />,
    )

    const EmptyStateComponent = await screen.findByTestId("empty-state")
    expect(EmptyStateComponent).toBeInTheDocument()

    const H3Component = screen.getByRole("heading", { level: 3 })
    expect(H3Component).toHaveTextContent(title)

    const ParagraphComponent = screen.getByText(description)
    expect(ParagraphComponent).toBeInTheDocument()

    const svgIcon = EmptyStateComponent.querySelector("svg")
    expect(svgIcon).toBeInTheDocument()

    expect(EmptyStateComponent).toContainElement(H3Component)
    expect(EmptyStateComponent).toContainElement(ParagraphComponent)
    expect(EmptyStateComponent).toContainElement(svgIcon)
  })

  test("EmptyState renders correctly with a given title, description, indicator and children", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    const buttonCaption = "Back to home"
    render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        indicator={<ShoppingCartIcon />}
        title={title}
      >
        <button>{buttonCaption}</button>
      </EmptyState.Root>,
    )

    const EmptyStateComponent = await screen.findByTestId("empty-state")
    expect(EmptyStateComponent).toBeInTheDocument()

    const H3Component = screen.getByRole("heading", { level: 3 })
    expect(H3Component).toHaveTextContent(title)

    const ParagraphComponent = screen.getByText(description)
    expect(ParagraphComponent).toBeInTheDocument()

    const svgIcon = EmptyStateComponent.querySelector("svg")
    expect(svgIcon).toBeInTheDocument()

    const ButtonElement = screen.getByRole("button", { name: buttonCaption })
    expect(ButtonElement).toBeInTheDocument()

    expect(EmptyStateComponent).toContainElement(H3Component)
    expect(EmptyStateComponent).toContainElement(ParagraphComponent)
    expect(EmptyStateComponent).toContainElement(svgIcon)
    expect(EmptyStateComponent).toContainElement(ButtonElement)
  })

  test("EmptyState does not render title when title prop is not provided", () => {
    const description = "Please add items to the cart"
    render(
      <EmptyState.Root data-testid="empty-state" description={description} />,
    )

    const EmptyStateComponent = screen.getByTestId("empty-state")
    expect(EmptyStateComponent).toBeInTheDocument()

    const headingElements = screen.queryAllByRole("heading", { level: 3 })
    expect(headingElements).toHaveLength(0)

    const ParagraphComponent = screen.getByText(description)
    expect(ParagraphComponent).toBeInTheDocument()
  })

  test("EmptyState does not render description when description prop is not provided", () => {
    const title = "Cart is empty"
    render(<EmptyState.Root data-testid="empty-state" title={title} />)

    const EmptyStateComponent = screen.getByTestId("empty-state")
    expect(EmptyStateComponent).toBeInTheDocument()

    const ParagraphComponent = screen.queryAllByRole("paragraph")
    expect(ParagraphComponent).toHaveLength(0)
  })
})
