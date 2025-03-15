import { For } from "."
import { a11y, render, screen } from "../../../test"

describe("<For />", () => {
  test("For renders correctly", async () => {
    await a11y(
      <For each={["One", "Two", "Three"]}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
  })

  test("sets `displayName` and `__styled__` correctly", () => {
    expect(For.displayName).toBe("For")
    expect(For.__styled__).toBe("For")
  })

  test("For renders fallback when array is empty", () => {
    render(
      <For each={[]} fallback={<p>There are no items to show</p>}>
        {(item, index) => <p key={index}>{item}</p>}
      </For>,
    )
    expect(screen.getByText("There are no items to show")).toBeInTheDocument()
  })

  test("For renders fallback when array is undefined", () => {
    render(
      <For each={undefined} fallback={<p>There are no items to show</p>}>
        {(_, index) => <p key={index}>Item</p>}
      </For>,
    )
    expect(screen.getByText("There are no items to show")).toBeInTheDocument()
  })
})
