import { a11y, render } from "@yamada-ui/test"
import { Card, CardBody, CardFooter, CardHeader } from "../src"

describe("<Card />", () => {
  test("renders card correctly", async () => {
    const { container } = render(<Card>Card</Card>)

    await a11y(container)
  })

  test("renders all the allowed shorthand style props", () => {
    const { container } = render(
      <Card direction="row" justify="start" align="start">
        Flex
      </Card>,
    )

    expect(container.querySelector(".ui-card")).toHaveStyle({
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "start",
    })
  })

  test("<CardHeader /> renders correctly", () => {
    const { container } = render(
      <Card>
        <CardHeader>Card Header</CardHeader>
      </Card>,
    )
    const header = container.querySelector(".ui-card__header")

    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent("Card Header")
  })

  test("<CardHeader /> applies custom className", () => {
    const { container } = render(
      <Card>
        <CardHeader className="custom-class">Card Header</CardHeader>
      </Card>,
    )
    const header = container.querySelector(".ui-card__header")

    expect(header).toHaveClass("custom-class")
  })

  test("<CardHeader /> applies styles correctly", () => {
    const { container } = render(
      <Card>
        <CardHeader>Card Header</CardHeader>
      </Card>,
    )
    const header = container.querySelector(".ui-card__header")

    expect(header).toHaveStyle({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    })
  })

  test("<CardBody /> renders correctly", () => {
    const { container } = render(
      <Card>
        <CardBody>Card Body</CardBody>
      </Card>,
    )
    const body = container.querySelector(".ui-card__body")

    expect(body).toBeInTheDocument()
    expect(body).toHaveTextContent("Card Body")
  })

  test("<CardBody /> applies custom className", () => {
    const { container } = render(
      <Card>
        <CardBody className="custom-class">Card Body</CardBody>
      </Card>,
    )
    const body = container.querySelector(".ui-card__body")

    expect(body).toHaveClass("custom-class")
  })

  test("<CardBody /> applies styles correctly", () => {
    const { container } = render(
      <Card>
        <CardBody>Card Body</CardBody>
      </Card>,
    )
    const body = container.querySelector(".ui-card__body")

    expect(body).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    })
  })

  test("<CardFooter /> renders correctly", () => {
    const { container } = render(
      <Card>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    )
    const footer = container.querySelector(".ui-card__footer")

    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent("Card Footer")
  })

  test("<CardFooter /> applies custom className", () => {
    const { container } = render(
      <Card>
        <CardFooter className="custom-class">Card Footer</CardFooter>
      </Card>,
    )
    const footer = container.querySelector(".ui-card__footer")

    expect(footer).toHaveClass("custom-class")
  })

  test("<CardFooter /> applies styles correctly", () => {
    const { container } = render(
      <Card>
        <CardFooter>Card Footer</CardFooter>
      </Card>,
    )
    const footer = container.querySelector(".ui-card__footer")

    expect(footer).toHaveStyle({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    })
  })
})
