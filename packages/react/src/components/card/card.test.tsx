import { a11y, render, screen } from "../../../test"
import { Card } from "./"

describe("<Card />", () => {
  test("renders card correctly", async () => {
    await a11y(<Card.Root>Card</Card.Root>)
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

  test("<Card.Header /> applies styles correctly", async () => {
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

  test("<Card.Body /> applies styles correctly", () => {
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

  test("<Card.Footer /> applies styles correctly", async () => {
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
