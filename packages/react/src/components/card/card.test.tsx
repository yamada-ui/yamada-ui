import { a11y, page, render } from "#test/browser"
import { Card } from "./"

describe("<Card />", () => {
  test("renders component correctly", async () => {
    await a11y(<Card.Root>Card</Card.Root>)
  })

  test("sets `displayName` correctly", () => {
    expect(Card.Root.displayName).toBe("CardRoot")
    expect(Card.Header.displayName).toBe("CardHeader")
    expect(Card.Body.displayName).toBe("CardBody")
    expect(Card.Footer.displayName).toBe("CardFooter")
  })

  test("sets `className` correctly", async () => {
    await render(
      <Card.Root data-testid="root">
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )

    await expect.element(page.getByTestId("root")).toHaveClass("ui-card__root")
    await expect
      .element(page.getByText("Card Header"))
      .toHaveClass("ui-card__header")
    await expect
      .element(page.getByText("Card Body"))
      .toHaveClass("ui-card__body")
    await expect
      .element(page.getByText("Card Footer"))
      .toHaveClass("ui-card__footer")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Card.Root data-testid="root">
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )

    expect(page.getByTestId("root").element().tagName).toBe("ARTICLE")
    expect(page.getByText("Card Header").element().tagName).toBe("HEADER")
    expect(page.getByText("Card Body").element().tagName).toBe("DIV")
    expect(page.getByText("Card Footer").element().tagName).toBe("FOOTER")
  })
})
