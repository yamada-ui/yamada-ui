import { a11y, render, screen } from "#test"
import { Card } from "./"

describe("<Card />", () => {
  test("renders card correctly", async () => {
    await a11y(<Card.Root>Card</Card.Root>)
  })

  test("sets `displayName` correctly", () => {
    expect(Card.Root.displayName).toBe("CardRoot")
    expect(Card.Header.displayName).toBe("CardHeader")
    expect(Card.Body.displayName).toBe("CardBody")
    expect(Card.Footer.displayName).toBe("CardFooter")
  })

  test("sets `className` correctly", () => {
    render(
      <Card.Root data-testid="root">
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-card__root")
    expect(screen.getByText("Card Header")).toHaveClass("ui-card__header")
    expect(screen.getByText("Card Body")).toHaveClass("ui-card__body")
    expect(screen.getByText("Card Footer")).toHaveClass("ui-card__footer")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Card.Root data-testid="root">
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("ARTICLE")
    expect(screen.getByRole("banner").tagName).toBe("HEADER")
    expect(screen.getByText("Card Body").tagName).toBe("DIV")
    expect(screen.getByRole("contentinfo").tagName).toBe("FOOTER")
  })
})
