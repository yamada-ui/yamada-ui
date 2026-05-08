import { a11y, render, screen } from "#test"
import { For } from "."

describe("<For />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <For each={["One", "Two", "Three"]}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
  })

  test("renders fallback when array is empty", () => {
    render(
      <For each={[]} fallback={<p>There are no items to show</p>}>
        {(item, index) => <p key={index}>{item}</p>}
      </For>,
    )
    expect(screen.getByText("There are no items to show")).toBeInTheDocument()
  })

  test("renders fallback when array is undefined", () => {
    render(
      <For each={undefined} fallback={<p>There are no items to show</p>}>
        {(_, index) => <p key={index}>Item</p>}
      </For>,
    )
    expect(screen.getByText("There are no items to show")).toBeInTheDocument()
  })

  test("passes index to children", () => {
    const each = [0, 1, 2, 3, 4]
    render(
      <For each={each}>
        {(item, index) => {
          expect(item).toBe(index)
          return <p key={index}>{item}</p>
        }}
      </For>,
    )
  })

  test("renders correctly with filter", () => {
    render(
      <For each={["One", "Two", "Three"]} filter={(item) => item !== "Two"}>
        {(item, index) => <p key={index}>{item}</p>}
      </For>,
    )
    expect(screen.getByText("One")).toBeInTheDocument()
    expect(screen.getByText("Three")).toBeInTheDocument()
    expect(screen.queryByText("Two")).not.toBeInTheDocument()
  })

  test("renders correctly with limit", () => {
    render(
      <For each={["One", "Two", "Three"]} limit={2}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
    expect(screen.getByText("One")).toBeInTheDocument()
    expect(screen.getByText("Two")).toBeInTheDocument()
    expect(screen.queryByText("Three")).not.toBeInTheDocument()
  })

  test("renders correctly with offset", () => {
    render(
      <For each={["One", "Two", "Three"]} offset={1}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
    expect(screen.getByText("Two")).toBeInTheDocument()
    expect(screen.getByText("Three")).toBeInTheDocument()
    expect(screen.queryByText("One")).not.toBeInTheDocument()
  })

  test("renders correctly with reverse", () => {
    const indexes: number[] = []
    render(
      <For each={["One", "Two", "Three"]} reverse>
        {(item, index) => {
          indexes.push(index)
          return (
            <div key={index} data-testid="for">
              {item}
            </div>
          )
        }}
      </For>,
    )
    const items = screen.getAllByTestId("for").map((el) => el.textContent)
    expect(items).toStrictEqual(["Three", "Two", "One"])
    expect(indexes).toStrictEqual([0, 1, 2])
  })

  test("renders correctly with sort", () => {
    render(
      <For each={["One", "Two", "Three"]} sort={(a, b) => a.localeCompare(b)}>
        {(item, index) => (
          <div key={index} data-testid="for">
            {item}
          </div>
        )}
      </For>,
    )
    const items = screen.getAllByTestId("for").map((el) => el.textContent)
    expect(items).toStrictEqual(["One", "Three", "Two"])
  })

  test("renders correctly with combined options", () => {
    render(
      <For
        each={["One", "Two", "Three", "Four"]}
        filter={(item) => item !== "Two"}
        limit={2}
        offset={1}
        reverse
        sort={(a, b) => a.localeCompare(b)}
      >
        {(item, index) => (
          <p key={index} data-testid="for-combined-item">
            {item}
          </p>
        )}
      </For>,
    )
    const items = screen
      .getAllByTestId("for-combined-item")
      .map((el) => el.textContent)
    expect(items).toStrictEqual(["One", "Four"])
  })
})
