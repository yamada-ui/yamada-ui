import { a11y, render, screen, TestIcon } from "@yamada-ui/test"
import { DecimalList, DiscList, List, ListIcon, ListItem } from "../src"

describe("<List />", () => {
  test("List renders correctly", async () => {
    const { container } = render(
      <List>
        <ListItem>Item one</ListItem>
      </List>,
    )
    await a11y(container)
  })

  test("should render an unordered list", async () => {
    render(
      <DiscList aria-label="DiscList">
        <ListItem>List item</ListItem>
        <ListItem>List item</ListItem>
      </DiscList>,
    )

    const list = await screen.findByRole("list", {
      name: /DiscList/i,
    })
    expect(list).toHaveStyle({
      "list-style-type": "disc",
    })
  })

  test("should render an ordered list", async () => {
    render(
      <DecimalList aria-label="DecimalList">
        <ListItem>One</ListItem>
        <ListItem>Two</ListItem>
      </DecimalList>,
    )

    const list = await screen.findByRole("list", {
      name: /DecimalList/i,
    })
    expect(list).toHaveStyle({
      "list-style-type": "decimal",
    })
  })

  test("should render list with a gap", async () => {
    render(
      <List gap="lg" aria-label="List">
        <ListItem>Item one</ListItem>
        <ListItem>Item two</ListItem>
      </List>,
    )

    const list = await screen.findByRole("list", {
      name: /List/i,
    })
    expect(list).toHaveStyle({
      gap: "var(--ui-spaces-lg)",
    })
  })

  test("should render list with an icon", async () => {
    render(
      <List>
        <ListItem>
          <ListIcon as={TestIcon} aria-label="icon" />
        </ListItem>
      </List>,
    )

    const icon = await screen.findByLabelText(/icon/i)

    expect(icon).toBeInTheDocument()
  })

  test("should render list with different style types", async () => {
    render(
      <>
        <List styleType="square" aria-label="list-square">
          <ListItem>Item</ListItem>
        </List>

        <List styleType="circle" aria-label="list-circle">
          <ListItem>Item</ListItem>
        </List>
      </>,
    )

    const listSquare = await screen.findByRole("list", {
      name: /list-square/i,
    })
    const listCircle = await screen.findByRole("list", {
      name: /list-circle/i,
    })

    expect(listSquare).toHaveStyle({
      "list-style-type": "square",
    })
    expect(listCircle).toHaveStyle({
      "list-style-type": "circle",
    })
  })
})
