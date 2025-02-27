import { a11y, render, screen } from "../../../test"
import { Card } from "./"

describe("<Card />", () => {
  test("renders card correctly", async () => {
    await a11y(<Card.Root>Card</Card.Root>)
  })

  test("sets `displayName` and `__ui__` correctly", () => {
    expect(Card.Root.displayName).toBe("CardRoot")
    expect(Card.Root.__ui__).toBe("CardRoot")

    expect(Card.Header.displayName).toBe("CardHeader")
    expect(Card.Header.__ui__).toBe("CardHeader")

    expect(Card.Body.displayName).toBe("CardBody")
    expect(Card.Body.__ui__).toBe("CardBody")

    expect(Card.Footer.displayName).toBe("CardFooter")
    expect(Card.Footer.__ui__).toBe("CardFooter")
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
    expect(screen.getByRole("banner").tagName).toBe("HEADER")
    expect(screen.getByRole("contentinfo").tagName).toBe("FOOTER")
  })

  test("<Card.Root /> renders <ui.article /> component", async () => {
    render(<Card.Root>Card</Card.Root>)

    const article = await screen.findByRole("article")
    expect(article).toBeInTheDocument()
    expect(article).toHaveTextContent("Card")
  })

  test("<Card.Header /> renders correctly", async () => {
    render(
      <Card.Root>
        <Card.Header>Card Header</Card.Header>
      </Card.Root>,
    )

    const header = await screen.findByRole("banner")
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Card Header")
  })

  test("<Card.Header /> applies custom className", async () => {
    render(
      <Card.Root>
        <Card.Header className="custom-class">Card Header</Card.Header>
      </Card.Root>,
    )

    const header = await screen.findByRole("banner")
    expect(header).toHaveClass("custom-class")
  })

  test.todo("<Card.Header /> applies styles correctly", async () => {
    render(
      <Card.Root>
        <Card.Header>Card Header</Card.Header>
      </Card.Root>,
    )

    const header = await screen.findByRole("banner")
    expect(header).toHaveStyle({
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
    })
  })

  test("<Card.Header /> renders <ui.header /> component", async () => {
    render(
      <Card.Root>
        <Card.Header>CardHeader</Card.Header>
      </Card.Root>,
    )

    const header = await screen.findByRole("banner")
    expect(header).toBeInTheDocument()
  })

  test("<Card.Body /> renders correctly", () => {
    render(
      <Card.Root>
        <Card.Body>Card Body</Card.Body>
      </Card.Root>,
    )

    const body = screen.getByText("Card Body")
    expect(body).toBeInTheDocument()
    expect(body).toHaveTextContent("Card Body")
  })

  test("<Card.Body /> applies custom className", () => {
    render(
      <Card.Root>
        <Card.Body className="custom-class">Card Body</Card.Body>
      </Card.Root>,
    )

    const body = screen.getByText("Card Body")
    expect(body).toHaveClass("custom-class")
  })

  test.todo("<Card.Body /> applies styles correctly", () => {
    render(
      <Card.Root>
        <Card.Body>Card Body</Card.Body>
      </Card.Root>,
    )

    const body = screen.getByText("Card Body")
    expect(body).toHaveStyle({
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
    })
  })

  test("<Card.Footer /> renders correctly", async () => {
    render(
      <Card.Root>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )

    const footer = await screen.findByRole("contentinfo")
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent("Card Footer")
  })

  test("<Card.Footer /> applies custom className", async () => {
    render(
      <Card.Root>
        <Card.Footer className="custom-class">Card Footer</Card.Footer>
      </Card.Root>,
    )

    const footer = await screen.findByRole("contentinfo")
    expect(footer).toHaveClass("custom-class")
  })

  test.todo("<Card.Footer /> applies styles correctly", async () => {
    render(
      <Card.Root>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>,
    )

    const footer = await screen.findByRole("contentinfo")
    expect(footer).toHaveStyle({
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-start",
    })
  })

  test("<Card.Footer /> renders <ui.footer /> component", async () => {
    render(
      <Card.Root>
        <Card.Footer>CardFooter</Card.Footer>
      </Card.Root>,
    )

    const footer = await screen.findByRole("contentinfo")
    expect(footer).toBeInTheDocument()
  })
})
