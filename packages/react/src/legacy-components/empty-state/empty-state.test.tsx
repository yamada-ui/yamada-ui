import { a11y, render, screen } from "../../../test"
import { ShoppingCartIcon } from "../icon"
import { EmptyState } from "./"

describe("<EmptyState />", () => {
  test("EmptyState renders correctly", async () => {
    await a11y(
      <EmptyState
        description="Explore our products and add items to your cart"
        title="Your cart is empty"
      />,
    )
  })

  test("EmptyState renders correctly with a given title", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    render(
      <EmptyState
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
      <EmptyState
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
      <EmptyState
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
      <EmptyState
        data-testid="empty-state"
        description={description}
        indicator={<ShoppingCartIcon />}
        title={title}
      >
        <button>{buttonCaption}</button>
      </EmptyState>,
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
})
