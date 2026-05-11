import { a11y } from "#test"
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
})
