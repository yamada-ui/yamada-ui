import { a11y, render, screen } from "#test"
import { Card } from "./"

describe("<Card />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Card.Root>
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Card.Root.displayName).toBe("CardRoot")
    expect(Card.Header.displayName).toBe("CardHeader")
    expect(Card.Body.displayName).toBe("CardBody")
    expect(Card.Footer.displayName).toBe("CardFooter")
  })

  test("sets `className` correctly", () => {
    const { container } = render(
      <Card.Root>
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )

    expect(container.firstElementChild).toHaveClass("ui-card__root")
    expect(screen.getByText("Card Header")).toHaveClass("ui-card__header")
    expect(screen.getByText("Card Body")).toHaveClass("ui-card__body")
    expect(screen.getByText("Card Footer")).toHaveClass("ui-card__footer")
  })

  test("renders HTML tag correctly", () => {
    const { container } = render(
      <Card.Root>
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )

    expect(container.firstElementChild?.tagName).toBe("ARTICLE")
    expect(screen.getByText("Card Header").tagName).toBe("HEADER")
    expect(screen.getByText("Card Body").tagName).toBe("DIV")
    expect(screen.getByText("Card Footer").tagName).toBe("FOOTER")
  })
})
