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

  test("For correctly passes index to children", () => {
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

  test("For renders correctly with filterBy", () => {
    render(
      <For each={["One", "Two", "Three"]} filterBy={(item) => item !== "Two"}>
        {(item, index) => <p key={index}>{item}</p>}
      </For>,
    )
    expect(screen.getByText("One")).toBeInTheDocument()
    expect(screen.getByText("Three")).toBeInTheDocument()
    expect(screen.queryByText("Two")).not.toBeInTheDocument()
  })

  test("For renders correctly with limitBy", () => {
    render(
      <For each={["One", "Two", "Three"]} limitBy={2}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
    expect(screen.getByText("One")).toBeInTheDocument()
    expect(screen.getByText("Two")).toBeInTheDocument()
    expect(screen.queryByText("Three")).not.toBeInTheDocument()
  })

  test("For renders correctly with offsetBy", () => {
    render(
      <For each={["One", "Two", "Three"]} offsetBy={1}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
    expect(screen.getByText("Two")).toBeInTheDocument()
    expect(screen.getByText("Three")).toBeInTheDocument()
    expect(screen.queryByText("One")).not.toBeInTheDocument()
  })

  test("For renders correctly with reverse", () => {
    let indexes: number[] = []
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

  test("For renders correctly with sortBy", () => {
    render(
      <For each={["One", "Two", "Three"]} sortBy={(a, b) => a.localeCompare(b)}>
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

  test("For renders correctly with combined options", () => {
    render(
      <For
        each={["One", "Two", "Three", "Four"]}
        filterBy={(item) => item !== "Two"} // One, Three, Four
        limitBy={2} // One, Four
        offsetBy={1} // One, Four
        reverse // Three, One, Four
        sortBy={(a, b) => a.localeCompare(b)} // Four, One, Three
      >
        {(item, index) => <p key={index}>{item}</p>}
      </For>,
    )
    const items = screen.getAllByRole("paragraph").map((el) => el.textContent)
    expect(items).toStrictEqual(["One", "Four"])
  })
})
