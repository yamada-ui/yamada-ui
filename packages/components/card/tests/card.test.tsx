import { a11y, render, screen } from "@yamada-ui/test"
import { Card, CardBody, CardFooter, CardHeader } from "../src"

describe("<Card />", () => {
  test("renders card correctly", async () => {
    const { container } = render(<Card>Card</Card>)

    await a11y(container)
  })

  test("renders all the allowed shorthand style props", async () => {
    render(
      <Card direction="row" justify="start" align="start">
        Flex
      </Card>,
    )

    const card = await screen.findByRole("article")
    expect(card).toHaveStyle({
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "start",
    })
  })

  test("<Card /> renders <ui.article /> component", async () => {
    render(<Card>Card</Card>)

    const article = await screen.findByRole("article")
    expect(article).toBeInTheDocument()
    expect(article).toHaveTextContent("Card")
  })

  test("<CardHeader /> renders correctly", async () => {
    render(
      <Card>
        <CardHeader>Card Header</CardHeader>
      </Card>,
    )

    const header = await screen.findByRole("banner")
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Card Header")
  })

  test("<CardHeader /> applies custom className", async () => {
    render(
      <Card>
        <CardHeader className="custom-class">Card Header</CardHeader>
      </Card>,
    )

    const header = await screen.findByRole("banner")
    expect(header).toHaveClass("custom-class")
  })

  test("<CardHeader /> applies styles correctly", async () => {
    render(
      <Card>
        <CardHeader>Card Header</CardHeader>
      </Card>,
    )

    const header = await screen.findByRole("banner")
    expect(header).toHaveStyle({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    })
  })

  test("<CardHeader /> renders <ui.header /> component", async () => {
    render(
      <Card>
        <CardHeader>CardHeader</CardHeader>
      </Card>,
    )

    const header = await screen.findByRole("banner")
    expect(header).toBeInTheDocument()
  })

  test("<CardBody /> renders correctly", async () => {
    render(
      <Card>
        <CardBody data-testid="body">Card Body</CardBody>
      </Card>,
    )

    const body = await screen.findByTestId("body")
    expect(body).toBeInTheDocument()
    expect(body).toHaveTextContent("Card Body")
  })

  test("<CardBody /> applies custom className", async () => {
    render(
      <Card>
        <CardBody data-testid="body" className="custom-class">
          Card Body
        </CardBody>
      </Card>,
    )

    const body = await screen.findByTestId("body")
    expect(body).toHaveClass("custom-class")
  })

  test("<CardBody /> applies styles correctly", async () => {
    render(
      <Card>
        <CardBody data-testid="body">Card Body</CardBody>
      </Card>,
    )

    const body = await screen.findByTestId("body")
    expect(body).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    })
  })

  test("<CardFooter /> renders correctly", async () => {
    render(
      <Card>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    )

    const footer = await screen.findByRole("contentinfo")
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent("Card Footer")
  })

  test("<CardFooter /> applies custom className", async () => {
    render(
      <Card>
        <CardFooter className="custom-class">Card Footer</CardFooter>
      </Card>,
    )

    const footer = await screen.findByRole("contentinfo")
    expect(footer).toHaveClass("custom-class")
  })

  test("<CardFooter /> applies styles correctly", async () => {
    render(
      <Card>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    )

    const footer = await screen.findByRole("contentinfo")
    expect(footer).toHaveStyle({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    })
  })

  test("<CardFooter /> renders <ui.footer /> component", async () => {
    render(
      <Card>
        <CardFooter>CardFooter</CardFooter>
      </Card>,
    )

    const footer = await screen.findByRole("contentinfo")
    expect(footer).toBeInTheDocument()
  })
})
