import type { Environment } from "./environment-provider"
import type { ThemeScheme } from "./index.types"
import { act, render, renderHook } from "#test"
import { UIProvider } from "../../providers/ui-provider"
import { getPreventTransition, useTheme } from "./theme-provider"

describe("ThemeProvider", () => {
  test("renders color mode variable rules", () => {
    render(
      <UIProvider>
        <div />
      </UIProvider>,
      { withProvider: false },
    )

    const styles = [...document.head.querySelectorAll("style")]
      .map((style) => style.textContent)
      .join("")

    expect(styles).toContain(":host([data-mode=dark])")
    expect(styles).not.toContain(":host:host([data-mode=dark])")
  })

  test("inserts transition styles into the shadow root", () => {
    const host = document.createElement("div")
    const shadowRoot = host.attachShadow({ mode: "open" })
    const headStyleCount = document.head.querySelectorAll("style").length
    const environment: Environment = {
      getDocument: () => document,
      getRootElement: () => host,
      getRootNode: () => shadowRoot,
      getWindow: () => window,
    }

    getPreventTransition(environment)

    const style = shadowRoot.querySelector("style")

    expect(style?.parentNode).toBe(shadowRoot)
    expect(style?.textContent).toContain(":host, *")
    expect(document.head.querySelectorAll("style")).toHaveLength(headStyleCount)
  })

  test("provides a theme to child components", () => {
    const { result } = renderHook(() => useTheme())

    expect(result.current.theme.colors.blue["50"]).toBe("#e2edfd")
    expect(result.current.theme.fontSizes.md).toBe("1rem")
  })

  test("allows theme updates through changeThemeScheme", () => {
    const { rerender, result } = renderHook(() => useTheme())

    act(() => {
      result.current.changeThemeScheme("updated" as ThemeScheme)
    })

    rerender()

    expect(document.documentElement.dataset.theme).toBe("updated")
  })
})
