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
    await expect
      .element(page.getByTestId("root"))
      .toHaveProperty("tagName", "DIV")
    await expect
      .element(page.getByTestId("indicator"))
      .toHaveProperty("tagName", "DIV")
    await expect
      .element(page.getByTestId("title"))
      .toHaveProperty("tagName", "H3")
    await expect
      .element(page.getByTestId("description"))
      .toHaveProperty("tagName", "P")
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

    const emptyState = page.getByTestId("empty-state")
    await expect.element(emptyState).toBeInTheDocument()

    await expect
      .element(emptyState.getByRole("heading", { level: 3 }))
      .toHaveTextContent(title)
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

    const emptyState = page.getByTestId("empty-state")
    await expect.element(emptyState).toBeInTheDocument()

    await expect
      .element(emptyState.getByRole("heading", { level: 3 }))
      .toHaveTextContent(title)

    await expect
      .element(emptyState.getByRole("paragraph"))
      .toHaveTextContent(description)
  })

  test("EmptyState renders correctly with a given title, description and indicator", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    const SvgIcon = <ShoppingCartIcon data-testid="indicator-icon" />
    await render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        indicator={SvgIcon}
        title={title}
      />,
    )

    const emptyState = page.getByTestId("empty-state")
    await expect.element(emptyState).toBeInTheDocument()

    await expect
      .element(emptyState.getByRole("heading", { level: 3 }))
      .toHaveTextContent(title)

    await expect
      .element(emptyState.getByRole("paragraph"))
      .toHaveTextContent(description)

    await expect
      .element(emptyState.getByTestId("indicator-icon"))
      .toBeInTheDocument()
  })

  test("EmptyState renders correctly with a given title, description, indicator and children", async () => {
    const title = "Cart is empty"
    const description = "Please add items to the cart"
    const buttonCaption = "Back to home"
    await render(
      <EmptyState.Root
        data-testid="empty-state"
        description={description}
        indicator={<ShoppingCartIcon data-testid="indicator-icon" />}
        title={title}
      >
        <button>{buttonCaption}</button>
      </EmptyState.Root>,
    )

    const emptyState = page.getByTestId("empty-state")
    await expect.element(emptyState).toBeInTheDocument()

    await expect
      .element(emptyState.getByRole("heading", { level: 3 }))
      .toHaveTextContent(title)

    await expect
      .element(emptyState.getByRole("paragraph"))
      .toHaveTextContent(description)

    await expect
      .element(emptyState.getByTestId("indicator-icon"))
      .toBeInTheDocument()

    await expect
      .element(emptyState.getByRole("button", { name: buttonCaption }))
      .toBeInTheDocument()
  })

  test("EmptyState does not render title when title prop is not provided", async () => {
    const description = "Please add items to the cart"
    await render(
      <EmptyState.Root data-testid="empty-state" description={description} />,
    )

    const emptyState = page.getByTestId("empty-state")
    await expect.element(emptyState).toBeInTheDocument()

    await expect
      .element(emptyState.getByRole("heading", { level: 3 }).query())
      .not.toBeInTheDocument()
    await expect
      .element(emptyState.getByRole("paragraph"))
      .toHaveTextContent(description)
  })

  test("EmptyState does not render description when description prop is not provided", async () => {
    const title = "Cart is empty"
    await render(<EmptyState.Root data-testid="empty-state" title={title} />)

    const emptyState = page.getByTestId("empty-state")
    await expect.element(emptyState).toBeInTheDocument()

    await expect
      .element(emptyState.getByRole("heading", { level: 3 }))
      .toHaveTextContent(title)
    await expect
      .element(emptyState.getByRole("paragraph").query())
      .not.toBeInTheDocument()
  })
})
