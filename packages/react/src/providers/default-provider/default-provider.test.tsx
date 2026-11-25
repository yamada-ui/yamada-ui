import { render, screen } from "#test"
import { useI18n } from "../i18n-provider"
import { DefaultProvider, extendConfig, extendTheme } from "./default-provider"

describe("DefaultProvider", () => {
  test("renders children correctly", () => {
    render(
      <DefaultProvider>
        <div data-testid="child">Hello</div>
      </DefaultProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("child")).toHaveTextContent("Hello")
  })

  test("forwards i18n props", () => {
    const intl = {
      "en-US": {
        test: {
          price: "Price: {price, number, currency}",
        },
      },
      "ja-JP": {
        test: {
          price: "価格: {price, number, currency}",
        },
      },
    }
    const TestComponent = () => {
      const { locale, t } = useI18n()

      return (
        <>
          <span data-testid="locale">{locale}</span>
          <span data-testid="price">
            {t("test.price" as any, { price: 1 } as any)}
          </span>
        </>
      )
    }

    render(
      <DefaultProvider
        fallbackLocale="ja-JP"
        formats={{
          date: {},
          number: {
            currency: { style: "currency", currency: "JPY" },
          },
          time: {},
        }}
        intl={intl}
        locale="jk"
      >
        <TestComponent />
      </DefaultProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("locale")).toHaveTextContent("ja-JP")
    expect(screen.getByTestId("price")).toHaveTextContent("価格: ￥1")
  })
})

describe("extendTheme", () => {
  test("merges custom theme with default theme", () => {
    const result = extendTheme({
      colors: { custom: "#000" },
    })

    expect((result as any).colors.custom).toBe("#000")
    expect((result as any).semanticTokens).toBeDefined()
  })
})

describe("extendConfig", () => {
  test("merges custom config with default config", () => {
    const result = extendConfig({ defaultColorMode: "dark" })

    expect(result.defaultColorMode).toBe("dark")
    expect(result.css?.varPrefix).toBe("ui")
  })
})
