import { a11y, render, screen } from "#test"
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

  test("sets `className` correctly", () => {
    render(
      <QrCode.Root data-testid="root" value="https://yamada-ui.com">
        <QrCode.Frame data-testid="frame">
          <QrCode.Pattern data-testid="pattern" />
        </QrCode.Frame>
        <QrCode.Overlay data-testid="overlay" />
      </QrCode.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-qr-code__root")
    expect(screen.getByTestId("frame")).toHaveClass("ui-qr-code__frame")
    expect(screen.getByTestId("pattern")).toHaveClass("ui-qr-code__pattern")
    expect(screen.getByTestId("overlay")).toHaveClass("ui-qr-code__overlay")
  })

  test("renders HTML tag correctly", () => {
    render(
      <QrCode.Root data-testid="root" value="https://yamada-ui.com">
        <QrCode.Frame data-testid="frame">
          <QrCode.Pattern data-testid="pattern" />
        </QrCode.Frame>
        <QrCode.Overlay data-testid="overlay" />
      </QrCode.Root>,
    )

    expect(screen.getByTestId("root").tagName).toBe("DIV")
    expect(screen.getByTestId("frame").tagName).toBe("svg")
    expect(screen.getByTestId("pattern").tagName).toBe("path")
    expect(screen.getByTestId("overlay").tagName).toBe("DIV")
  })
})
