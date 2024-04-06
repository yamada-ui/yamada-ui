import { a11y, render } from "@yamada-ui/test"
import { Card, CardBody, CardFooter, CardHeader } from "../src"

describe("<Card />", () => {
  test("renders card correctly", async () => {
    const { container } = render(<Card>Card</Card>)

    await a11y(container)
  })

  test("renders all the allowed shorthand style props", () => {
    const { getByTestId } = render(
      <Card data-testid="card" direction="row" justify="start" align="start">
        Flex
      </Card>,
    )

    expect(getByTestId("card")).toHaveStyle({
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "start",
    })
  })

  test("<CardHeader /> renders correctly", () => {
    const { getByTestId } = render(
      <Card>
        <CardHeader data-testid="header">Card Header</CardHeader>
      </Card>,
    )
    const header = getByTestId("header")

    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Card Header")
  })

  test("<CardHeader /> applies custom className", () => {
    const { getByTestId } = render(
      <Card>
        <CardHeader data-testid="header" className="custom-class">
          Card Header
        </CardHeader>
      </Card>,
    )
    const header = getByTestId("header")

    expect(header).toHaveClass("custom-class")
  })

  test("<CardHeader /> applies styles correctly", () => {
    const { getByTestId } = render(
      <Card>
        <CardHeader data-testid="header">Card Header</CardHeader>
      </Card>,
    )
    const header = getByTestId("header")

    expect(header).toHaveStyle({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    })
  })

  test("<CardBody /> renders correctly", () => {
    const { getByTestId } = render(
      <Card>
        <CardBody data-testid="body">Card Body</CardBody>
      </Card>,
    )
    const body = getByTestId("body")

    expect(body).toBeInTheDocument()
    expect(body).toHaveTextContent("Card Body")
  })

  test("<CardBody /> applies custom className", () => {
    const { getByTestId } = render(
      <Card>
        <CardBody data-testid="body" className="custom-class">
          Card Body
        </CardBody>
      </Card>,
    )
    const body = getByTestId("body")

    expect(body).toHaveClass("custom-class")
  })

  test("<CardBody /> applies styles correctly", () => {
    const { getByTestId } = render(
      <Card>
        <CardBody data-testid="body">Card Body</CardBody>
      </Card>,
    )
    const body = getByTestId("body")

    expect(body).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    })
  })

  test("<CardFooter /> renders correctly", () => {
    const { getByTestId } = render(
      <Card>
        <CardFooter data-testid="footer">Card Footer</CardFooter>
      </Card>,
    )
    const footer = getByTestId("footer")

    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent("Card Footer")
  })

  test("<CardFooter /> applies custom className", () => {
    const { getByTestId } = render(
      <Card>
        <CardFooter data-testid="footer" className="custom-class">
          Card Footer
        </CardFooter>
      </Card>,
    )
    const footer = getByTestId("footer")

    expect(footer).toHaveClass("custom-class")
  })

  test("<CardFooter /> applies styles correctly", () => {
    const { getByTestId } = render(
      <Card>
        <CardFooter data-testid="footer">Card Footer</CardFooter>
      </Card>,
    )
    const footer = getByTestId("footer")

    expect(footer).toHaveStyle({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    })
  })
})
