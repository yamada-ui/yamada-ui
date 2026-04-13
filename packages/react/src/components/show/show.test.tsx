import { page, render } from "#test/browser"
import { Text } from "../text"
import { Show } from "./show"

describe("<Show />", () => {
  test("renders component correctly", async () => {
    await render(
      <Show fallback="World" when>
        Hello
      </Show>,
    )

    await expect.element(page.getByText("Hello")).toBeInTheDocument()
  })

  test("renders fallback when when is false", async () => {
    await render(
      <Show fallback="World" when={false}>
        Hello
      </Show>,
    )

    await expect.element(page.getByText("World")).toBeInTheDocument()
  })

  test("renders children with function pattern", async () => {
    await render(<Show when={{ name: "John" }}>{(when) => when.name}</Show>)

    await expect.element(page.getByText("John")).toBeInTheDocument()
  })

  test("renders children with Element", async () => {
    await render(
      <Show fallback="World" when>
        <Text>Hello</Text>
      </Show>,
    )

    await expect.element(page.getByText("Hello")).toBeInTheDocument()
  })

  test("renders nothing when when is false and no fallback is provided", async () => {
    const { container } = await render(<Show when={false}>Hello</Show>)

    expect(container.textContent).not.toContain("Hello")
  })

  test("renders nothing when when is null and no fallback is provided", async () => {
    const { container } = await render(<Show when={null}>Hello</Show>)

    expect(container.textContent).not.toContain("Hello")
  })
})
