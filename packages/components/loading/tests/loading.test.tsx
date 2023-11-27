import { render, a11y } from "@yamada-ui/test"
import { Loading } from "../src"

describe("<Loading />", () => {
  test("renders Loading correctly", () => {
    render(<Loading />)
  })

  test("passes a11y test", async () => {
    await a11y(<Loading />)
  })

  test("render with default class", () => {
    const { getByTestId } = render(
      <Loading
        data-testid="loading"
        variant="oval"
        size="6xl"
        color="red.500"
      />,
    )

    expect(getByTestId("loading")).toHaveClass("ui-loading")
  })
})
