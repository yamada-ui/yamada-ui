import { a11y, render, screen } from "#test"
import { BoxIcon } from "../icon"
import { List } from "./"

describe("<List />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <List.Root>
        <List.Item>Item one</List.Item>
      </List.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(List.Root.displayName).toBe("ListRoot")
    expect(List.Item.displayName).toBe("ListItem")
    expect(List.Icon.displayName).toBe("ListIcon")
  })

  test("sets `className` correctly", () => {
    render(
      <List.Root data-testid="list-root">
        <List.Item>Item one</List.Item>
      </List.Root>,
    )

    expect(screen.getByTestId("list-root")).toHaveClass("ui-list__root")
    expect(screen.getByText("Item one")).toHaveClass("ui-list__item")
  })

  test("renders HTML tag correctly", () => {
    render(
      <List.Root data-testid="list-root">
        <List.Item>Item one</List.Item>
      </List.Root>,
    )

    expect(screen.getByTestId("list-root").tagName).toBe("UL")
    expect(screen.getByText("Item one").tagName).toBe("LI")
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
