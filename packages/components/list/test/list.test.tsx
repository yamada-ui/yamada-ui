import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { Icon } from "@yamada-ui/fontawesome"
import { a11y, render, screen } from "@yamada-ui/test"
import { FaCheckCircle } from "react-icons/fa"
import { List, ListIcon, ListItem, DiscList, DecimalList } from "../src"

describe("<List />", () => {
  test("List renders correctly", async () => {
    const { container } = render(
      <List>
        <ListItem>Item one</ListItem>
      </List>,
    )
    await a11y(container)
  })

  test("should render an unordered list", () => {
    render(
      <DiscList data-testid="DiscList">
        <ListItem>List item</ListItem>
        <ListItem>List item</ListItem>
      </DiscList>,
    )
    expect(screen.getByTestId("DiscList")).toHaveStyle({
      "list-style-type": "disc",
    })
  })

  test("should render an ordered list", () => {
    render(
      <DecimalList data-testid="DecimalList">
        <ListItem>One</ListItem>
        <ListItem>Two</ListItem>
      </DecimalList>,
    )
    expect(screen.getByTestId("DecimalList")).toHaveStyle({
      "list-style-type": "decimal",
    })
  })

  test("should render list with a gap", () => {
    render(
      <List data-testid="List" gap="lg">
        <ListItem>Item one</ListItem>
        <ListItem>Item two</ListItem>
      </List>,
    )
    expect(screen.getByTestId("List")).toHaveStyle({
      gap: "var(--ui-spaces-lg)",
    })
  })

  test("should render list with an icon", () => {
    render(
      <List>
        <ListItem>
          <ListIcon data-testid="react-icon" as={FaCheckCircle} />
        </ListItem>
        <ListItem data-testid="font-awesome-icon">
          <ListIcon as={Icon} icon={faCheck} />
        </ListItem>
      </List>,
    )

    expect(screen.getByTestId("react-icon")).toBeInTheDocument()
    expect(screen.getByTestId("font-awesome-icon")).toBeInTheDocument()
  })

  test("should render list with different style types", () => {
    render(
      <>
        <List data-testid="list-square" styleType="square">
          <ListItem>Item</ListItem>
        </List>

        <List data-testid="list-circle" styleType="circle">
          <ListItem>Item</ListItem>
        </List>
      </>,
    )
    expect(screen.getByTestId("list-square")).toHaveStyle({
      "list-style-type": "square",
    })
    expect(screen.getByTestId("list-circle")).toHaveStyle({
      "list-style-type": "circle",
    })
  })
})
