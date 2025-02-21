import { a11y, render, screen } from "../../../test"
import { BoxIcon } from "../icon"
import { List } from "./"

describe("<List />", () => {
  test("List renders correctly", async () => {
    const { container } = render(
      <List.Root>
        <List.Item>Item one</List.Item>
      </List.Root>,
    )
    await a11y(container)
  })

  test("should render list with an icon", () => {
    render(
      <List.Root>
        <List.Item icon={<BoxIcon data-testid="box-icon" />} />
      </List.Root>,
    )

    const icon = screen.getByTestId("box-icon")

    expect(icon).toBeInTheDocument()
  })

  test("should render list with different style types", async () => {
    render(
      <>
        <List.Root data-testid="disc" styleType="disc">
          <List.Item>List item</List.Item>
        </List.Root>
        <List.Root data-testid="decimal" styleType="decimal">
          <List.Item>List item</List.Item>
        </List.Root>
        <List.Root data-testid="square" styleType="square">
          <List.Item>Item</List.Item>
        </List.Root>
        <List.Root data-testid="circle" styleType="circle">
          <List.Item>Item</List.Item>
        </List.Root>
      </>,
    )

    const listDisc = await screen.findByTestId("disc")
    const listDecimal = await screen.findByTestId("decimal")
    const listSquare = await screen.findByTestId("square")
    const listCircle = await screen.findByTestId("circle")

    expect(listDisc).toHaveStyle({
      "list-style-type": "disc",
    })
    expect(listDecimal).toHaveStyle({
      "list-style-type": "decimal",
    })
    expect(listSquare).toHaveStyle({
      "list-style-type": "square",
    })
    expect(listCircle).toHaveStyle({
      "list-style-type": "circle",
    })
  })
})
