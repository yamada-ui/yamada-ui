import { render, screen } from "#test"
import { Text } from "../text"
import { Show } from "./show"

describe("<Show />", () => {
  test("renders component correctly", () => {
    render(
      <Show fallback="World" when>
        Hello
      </Show>,
    )
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  test("renders fallback when when is false", () => {
    render(
      <Show fallback="World" when={false}>
        Hello
      </Show>,
    )
    expect(screen.getByText("World")).toBeInTheDocument()
  })

  test("renders children with function pattern", () => {
    render(<Show when={{ name: "John" }}>{(when) => when.name}</Show>)
    expect(screen.getByText("John")).toBeInTheDocument()
  })

  test("renders children with Element", () => {
    render(
      <Show fallback="World" when>
        <Text>Hello</Text>
      </Show>,
    )
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })
})
