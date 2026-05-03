import { page, render } from "#test/browser"
import { BoxIcon } from "../icon"
import { List } from "./"

describe("<List />", () => {
  test("sets `displayName` correctly", () => {
    expect(List.Root.displayName).toBe("ListRoot")
    expect(List.Item.displayName).toBe("ListItem")
    expect(List.Icon.displayName).toBe("ListIcon")
  })

  test("sets `className` correctly", async () => {
    await render(
      <List.Root data-testid="list-root">
        <List.Item>Item one</List.Item>
      </List.Root>,
    )

    const listRoot = page.getByTestId("list-root")
    const listItem = page.getByText("Item one")

    await expect.element(listRoot).toHaveClass("ui-list__root")
    await expect.element(listItem).toHaveClass("ui-list__item")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <List.Root data-testid="list-root">
        <List.Item>Item one</List.Item>
      </List.Root>,
    )

    const listRoot = page.getByTestId("list-root")
    const listItem = page.getByText("Item one")

    expect(listRoot.element().tagName).toBe("UL")
    expect(listItem.element().tagName).toBe("LI")
  })

  test("should render list with an icon", async () => {
    await render(
      <List.Root>
        <List.Item icon={<BoxIcon data-testid="box-icon" />} />
      </List.Root>,
    )

    const icon = page.getByTestId("box-icon")

    await expect.element(icon).toBeInTheDocument()
  })

  test("should render list with different style types", async () => {
    await render(
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

    const listDisc = page.getByTestId("disc")
    const listDecimal = page.getByTestId("decimal")
    const listSquare = page.getByTestId("square")
    const listCircle = page.getByTestId("circle")

    await expect.element(listDisc).toHaveStyle({
      listStyleType: "disc",
    })
    await expect.element(listDecimal).toHaveStyle({
      listStyleType: "decimal",
    })
    await expect.element(listSquare).toHaveStyle({
      listStyleType: "square",
    })
    await expect.element(listCircle).toHaveStyle({
      listStyleType: "circle",
    })
  })
})
