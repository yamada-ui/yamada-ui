import { a11y, render, screen } from "@yamada-ui/test"
import { Text } from "../../lucide/src"
import { For } from "../src"

describe("<For />", () => {
  test("For renders correctly", async () => {
    await a11y(
      <For each={["One", "Two", "Three"]}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
  })

  test("For renders fallback when array is empty", () => {
    render(
      <For each={[]} fallback={<Text>There are no items to show</Text>}>
        {(item, index) => <Text key={index}>{item}</Text>}
      </For>,
    )
    expect(screen.getByText("There are no items to show")).toBeInTheDocument()
  })

  test("For renders fallback when array is undefined", () => {
    render(
      <For each={undefined} fallback={<Text>There are no items to show</Text>}>
        {(item, index) => <Text key={index}>Item</Text>}
      </For>,
    )
    expect(screen.getByText("There are no items to show")).toBeInTheDocument()
  })
})
