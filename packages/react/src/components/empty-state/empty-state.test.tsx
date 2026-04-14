import { a11y, page, render } from "#test/browser"
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

  test("sets `className` correctly", async () => {
    await render(
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
    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-empty-state__root")
    await expect
      .element(page.getByTestId("indicator"))
      .toHaveClass("ui-empty-state__indicator")
    await expect
      .element(page.getByTestId("title"))
      .toHaveClass("ui-empty-state__title")
    await expect
      .element(page.getByTestId("description"))
      .toHaveClass("ui-empty-state__description")
  })

  test("renders HTML tag correctly", async () => {
    await render(
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
    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByTestId("indicator").element().tagName).toBe("DIV")
    expect(page.getByTestId("title").element().tagName).toBe("H3")
    expect(page.getByTestId("description").element().tagName).toBe("P")
  })

  test("EmptyState renders correctly with a given title", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    await render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        title={title}
      />,
    )

    const emptyStateComponent = page.getByTestId("empty-state").element()
    expect(emptyStateComponent).toBeInTheDocument()

    const h3Component = page.getByRole("heading", { level: 3 }).element()
    expect(h3Component).toHaveTextContent(title)

    expect(emptyStateComponent).toContainElement(h3Component)
  })

  test("EmptyState renders correctly with a given title and description", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"

    await render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        title={title}
      />,
    )

    const emptyStateComponent = page.getByTestId("empty-state").element()
    expect(emptyStateComponent).toBeInTheDocument()

    const h3Component = page.getByRole("heading", { level: 3 }).element()
    expect(h3Component).toHaveTextContent(title)

    const paragraphComponent = page.getByText(description).element()
    expect(paragraphComponent).toBeInTheDocument()

    expect(emptyStateComponent).toContainElement(h3Component)
    expect(emptyStateComponent).toContainElement(paragraphComponent)
  })

  test("EmptyState renders correctly with a given title, description and indicator", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    const SvgIcon = <ShoppingCartIcon />
    await render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        indicator={SvgIcon}
        title={title}
      />,
    )

    const emptyStateComponent = page.getByTestId("empty-state").element()
    expect(emptyStateComponent).toBeInTheDocument()

    const h3Component = page.getByRole("heading", { level: 3 }).element()
    expect(h3Component).toHaveTextContent(title)

    const paragraphComponent = page.getByText(description).element()
    expect(paragraphComponent).toBeInTheDocument()

    const svgIcon = emptyStateComponent.querySelector("svg")
    expect(svgIcon).toBeInTheDocument()

    expect(emptyStateComponent).toContainElement(h3Component)
    expect(emptyStateComponent).toContainElement(paragraphComponent)
    expect(emptyStateComponent).toContainElement(svgIcon)
  })

  test("EmptyState renders correctly with a given title, description, indicator and children", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    const buttonCaption = "Back to home"
    await render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        indicator={<ShoppingCartIcon />}
        title={title}
      >
        <button>{buttonCaption}</button>
      </EmptyState.Root>,
    )

    const emptyStateComponent = page.getByTestId("empty-state").element()
    expect(emptyStateComponent).toBeInTheDocument()

    const h3Component = page.getByRole("heading", { level: 3 }).element()
    expect(h3Component).toHaveTextContent(title)

    const paragraphComponent = page.getByText(description).element()
    expect(paragraphComponent).toBeInTheDocument()

    const svgIcon = emptyStateComponent.querySelector("svg")
    expect(svgIcon).toBeInTheDocument()

    const buttonElement = page
      .getByRole("button", { name: buttonCaption })
      .element()
    expect(buttonElement).toBeInTheDocument()

    expect(emptyStateComponent).toContainElement(h3Component)
    expect(emptyStateComponent).toContainElement(paragraphComponent)
    expect(emptyStateComponent).toContainElement(svgIcon)
    expect(emptyStateComponent).toContainElement(buttonElement)
  })

  test("EmptyState does not render title when title prop is not provided", async () => {
    const description = "Please add items to the cart"
    const { container } = await render(
      <EmptyState.Root data-testid="empty-state" description={description} />,
    )

    const emptyStateComponent = page.getByTestId("empty-state").element()
    expect(emptyStateComponent).toBeInTheDocument()

    const headingElements = container.querySelectorAll("h3")
    expect(headingElements).toHaveLength(0)

    const paragraphComponent = page.getByText(description).element()
    expect(paragraphComponent).toBeInTheDocument()
  })

  test("EmptyState does not render description when description prop is not provided", async () => {
    const title = "Cart is empty"
    const { container } = await render(
      <EmptyState.Root data-testid="empty-state" title={title} />,
    )

    const emptyStateComponent = page.getByTestId("empty-state").element()
    expect(emptyStateComponent).toBeInTheDocument()

    const paragraphComponents = container.querySelectorAll("p")
    expect(paragraphComponents).toHaveLength(0)
  })
})
