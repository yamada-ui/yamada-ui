import { a11y, page, render } from "#test/browser"
import { QrCode } from "."

describe("<QrCode />", () => {
  test("renders component correctly", async () => {
    await a11y(<QrCode.Root value="https://yamada-ui.com" />)
  })

  test("sets `displayName` correctly", () => {
    expect(QrCode.Root.displayName).toBe("QrCodeRoot")
    expect(QrCode.Frame.displayName).toBe("QrCodeFrame")
    expect(QrCode.Overlay.displayName).toBe("QrCodeOverlay")
    expect(QrCode.Pattern.displayName).toBe("QrCodePattern")
  })

  test("sets `className` correctly", async () => {
    await render(
      <QrCode.Root data-testid="root" value="https://yamada-ui.com">
        <QrCode.Frame data-testid="frame">
          <QrCode.Pattern data-testid="pattern" />
        </QrCode.Frame>
        <QrCode.Overlay data-testid="overlay" />
      </QrCode.Root>,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-qr-code__root")
    await expect
      .element(page.getByTestId("frame"))
      .toHaveClass("ui-qr-code__frame")
    await expect
      .element(page.getByTestId("pattern"))
      .toHaveClass("ui-qr-code__pattern")
    await expect
      .element(page.getByTestId("overlay"))
      .toHaveClass("ui-qr-code__overlay")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <QrCode.Root data-testid="root" value="https://yamada-ui.com">
        <QrCode.Frame data-testid="frame">
          <QrCode.Pattern data-testid="pattern" />
        </QrCode.Frame>
        <QrCode.Overlay data-testid="overlay" />
      </QrCode.Root>,
    )

    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    expect(page.getByTestId("frame").element().tagName).toBe("svg")
    expect(page.getByTestId("pattern").element().tagName).toBe("path")
    expect(page.getByTestId("overlay").element().tagName).toBe("DIV")
  })
})
