import { a11y, page, render } from "#test/browser"
import { For } from "."

describe("<For />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <For each={["One", "Two", "Three"]}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(For.name).toBe("For")
  })

  test("For renders fallback when array is empty", async () => {
    await render(
      <For each={[]} fallback={<p>There are no items to show</p>}>
        {(item, index) => <p key={index}>{item}</p>}
      </For>,
    )
    await expect
      .element(page.getByText("There are no items to show"))
      .toBeInTheDocument()
  })

  test("For renders fallback when array is undefined", async () => {
    await render(
      <For each={undefined} fallback={<p>There are no items to show</p>}>
        {(_, index) => <p key={index}>Item</p>}
      </For>,
    )
    await expect
      .element(page.getByText("There are no items to show"))
      .toBeInTheDocument()
  })

  test("For correctly passes index to children", async () => {
    const each = [0, 1, 2, 3, 4]
    await render(
      <For each={each}>
        {(item, index) => {
          expect(item).toBe(index)
          return <p key={index}>{item}</p>
        }}
      </For>,
    )
  })

  test("For renders correctly with filter", async () => {
    const { container } = await render(
      <For each={["One", "Two", "Three"]} filter={(item) => item !== "Two"}>
        {(item, index) => <p key={index}>{item}</p>}
      </For>,
    )
    await expect.element(page.getByText("One")).toBeInTheDocument()
    await expect.element(page.getByText("Three")).toBeInTheDocument()
    expect(container.textContent).not.toContain("Two")
  })

  test("For renders correctly with limit", async () => {
    const { container } = await render(
      <For each={["One", "Two", "Three"]} limit={2}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
    await expect.element(page.getByText("One")).toBeInTheDocument()
    await expect.element(page.getByText("Two")).toBeInTheDocument()
    expect(container.textContent).not.toContain("Three")
  })

  test("For renders correctly with offset", async () => {
    const { container } = await render(
      <For each={["One", "Two", "Three"]} offset={1}>
        {(item, index) => <div key={index}>{item}</div>}
      </For>,
    )
    await expect.element(page.getByText("Two")).toBeInTheDocument()
    await expect.element(page.getByText("Three")).toBeInTheDocument()
    expect(container.textContent).not.toContain("One")
  })

  test("For renders correctly with reverse", async () => {
    let indexes: number[] = []
    const { container } = await render(
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
    const items = Array.from(
      container.querySelectorAll('[data-testid="for"]'),
    ).map((el) => el.textContent)
    expect(items).toStrictEqual(["Three", "Two", "One"])
    expect(indexes).toStrictEqual([0, 1, 2])
  })

  test("For renders correctly with sortBy", async () => {
    const { container } = await render(
      <For each={["One", "Two", "Three"]} sort={(a, b) => a.localeCompare(b)}>
        {(item, index) => (
          <div key={index} data-testid="for">
            {item}
          </div>
        )}
      </For>,
    )
    const items = Array.from(
      container.querySelectorAll('[data-testid="for"]'),
    ).map((el) => el.textContent)
    expect(items).toStrictEqual(["One", "Three", "Two"])
  })

  test("For renders correctly with combined options", async () => {
    const { container } = await render(
      <For
        each={["One", "Two", "Three", "Four"]}
        filter={(item) => item !== "Two"}
        limit={2}
        offset={1}
        reverse
        sort={(a, b) => a.localeCompare(b)}
      >
        {(item, index) => <p key={index}>{item}</p>}
      </For>,
    )
    const items = Array.from(container.querySelectorAll("p")).map(
      (el) => el.textContent,
    )
    expect(items).toStrictEqual(["One", "Four"])
  })
})
