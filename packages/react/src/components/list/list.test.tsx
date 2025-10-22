import { a11y } from "#test"
import { List } from "./"

describe("<List />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <List.Root>
        <List.Item>Item one</List.Item>
      </List.Root>,
    )
  })
})
