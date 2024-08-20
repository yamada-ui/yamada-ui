import { render, a11y } from "@yamada-ui/test"
import type { LoadingProps } from "../src"
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
        fontSize="6xl"
        color="red.500"
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
            data-testid={`loading-${variant}`}
            variant={variant as LoadingProps["variant"]}
          />
          <Loading
            data-testid={`loading-${variant}-with-duration`}
            variant={variant as LoadingProps["variant"]}
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
