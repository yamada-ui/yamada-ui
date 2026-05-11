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

  test("renders list with an icon", () => {
    render(
      <List.Root>
        <List.Item icon={<BoxIcon data-testid="box-icon" />} />
      </List.Root>,
    )

    expect(screen.getByTestId("box-icon")).toBeInTheDocument()
  })

  test("renders list from items prop", () => {
    render(
      <List.Root items={[{ children: "First" }, { children: "Second" }]} />,
    )

    expect(screen.getByText("First")).toBeInTheDocument()
    expect(screen.getByText("Second")).toBeInTheDocument()
  })

  test("renders ol element when styleType is decimal", () => {
    render(
      <List.Root data-testid="list-root" styleType="decimal">
        <List.Item>Item one</List.Item>
      </List.Root>,
    )

    expect(screen.getByTestId("list-root").tagName).toBe("OL")
  })

  test("applies styleType to the rendered list", () => {
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

    expect(screen.getByTestId("disc")).toHaveStyle({ listStyleType: "disc" })
    expect(screen.getByTestId("decimal")).toHaveStyle({
      listStyleType: "decimal",
    })
    expect(screen.getByTestId("square")).toHaveStyle({
      listStyleType: "square",
    })
    expect(screen.getByTestId("circle")).toHaveStyle({
      listStyleType: "circle",
    })
  })
})
