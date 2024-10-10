import type { LoadingProps } from "../src"
import { a11y, render } from "@yamada-ui/test"
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
        variant="oval"
        data-testid="loading"
        color="red.500"
        fontSize="6xl"
        secondaryColor="blue.500"
      />,
    )

    expect(getByTestId("loading")).toHaveClass("ui-loading")
  })

  test("render with all variant", () => {
    const variants = [
      "oval",
      "grid",
      "audio",
      "dots",
      "puff",
      "rings",
      "circles",
    ]

    variants.forEach((variant) => {
      const { getByTestId } = render(
        <>
          <Loading
            variant={variant as LoadingProps["variant"]}
            data-testid={`loading-${variant}`}
          />
          <Loading
            variant={variant as LoadingProps["variant"]}
            data-testid={`loading-${variant}-with-duration`}
            duration={10}
          />
        </>,
      )

      expect(getByTestId(`loading-${variant}`)).toHaveClass(`ui-loading`)
      expect(getByTestId(`loading-${variant}-with-duration`)).toHaveClass(
        `ui-loading`,
      )
    })
  })
})
