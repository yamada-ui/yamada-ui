import type * as Utils from "../../utils"
import { render } from "#test"
import { renderToString } from "react-dom/server"
import {
  ColorModeScript,
  getStorageScript,
  ThemeSchemeScript,
} from "./storage-script"

vi.mock("../../utils", async () => {
  const actual = await vi.importActual<typeof Utils>("../../utils")
  return {
    ...actual,
    createdDom: vi.fn(actual.createdDom),
  }
})

const { createdDom } = await import("../../utils")
const createdDomMock = vi.mocked(createdDom)

describe("getStorageScript", () => {
  describe("colorMode", () => {
    test("generates localStorage script", () => {
      const script = getStorageScript(
        "colorMode",
        "color-mode",
      )({
        defaultValue: "light",
      })
      expect(script).toContain("localStorage")
      expect(script).toContain("light")
    })

    test("generates cookie script", () => {
      const script = getStorageScript(
        "colorMode",
        "color-mode",
      )({
        type: "cookie",
        defaultValue: "light",
      })
      expect(script).toContain("cookie")
      expect(script).toContain("light")
    })

    test("uses custom key", () => {
      const script = getStorageScript(
        "colorMode",
        "color-mode",
      )({
        key: "my-color-mode",
        defaultValue: "dark",
      })
      expect(script).toContain("my-color-mode")
    })

    test("uses default key when not provided", () => {
      const script = getStorageScript(
        "colorMode",
        "color-mode",
      )({
        defaultValue: "light",
      })
      expect(script).toContain("color-mode")
    })
  })

  describe("themeScheme", () => {
    test("generates localStorage script", () => {
      const script = getStorageScript(
        "themeScheme",
        "theme-scheme",
      )({
        defaultValue: "base",
      })
      expect(script).toContain("localStorage")
    })

    test("generates cookie script", () => {
      const script = getStorageScript(
        "themeScheme",
        "theme-scheme",
      )({
        type: "cookie",
        defaultValue: "base",
      })
      expect(script).toContain("cookie")
    })
  })
})

describe("ColorModeScript", () => {
  beforeEach(() => {
    createdDomMock.mockReset()
  })

  test("renders nothing on the client to avoid React script warnings", () => {
    createdDomMock.mockReturnValue(true)
    const { container } = render(<ColorModeScript />, { withProvider: false })
    expect(container.querySelector("script")).toBeNull()
    expect(container).toBeEmptyDOMElement()
  })

  test("renders nothing on the client even when nonce is provided", () => {
    createdDomMock.mockReturnValue(true)
    const { container } = render(<ColorModeScript nonce="test-nonce" />, {
      withProvider: false,
    })
    expect(container.querySelector("script")).toBeNull()
  })

  test("renders a script tag during SSR", () => {
    createdDomMock.mockReturnValue(false)
    const html = renderToString(<ColorModeScript />)
    expect(html).toContain("<script")
    expect(html).toContain("localStorage")
  })

  test("renders a script tag with nonce during SSR", () => {
    createdDomMock.mockReturnValue(false)
    const html = renderToString(<ColorModeScript nonce="test-nonce" />)
    expect(html).toContain("<script")
    expect(html).toContain('nonce="test-nonce"')
  })
})

describe("ThemeSchemeScript", () => {
  beforeEach(() => {
    createdDomMock.mockReset()
  })

  test("renders nothing on the client to avoid React script warnings", () => {
    createdDomMock.mockReturnValue(true)
    const { container } = render(<ThemeSchemeScript />, { withProvider: false })
    expect(container.querySelector("script")).toBeNull()
    expect(container).toBeEmptyDOMElement()
  })

  test("renders nothing on the client even when nonce is provided", () => {
    createdDomMock.mockReturnValue(true)
    const { container } = render(<ThemeSchemeScript nonce="test-nonce" />, {
      withProvider: false,
    })
    expect(container.querySelector("script")).toBeNull()
  })

  test("renders a script tag during SSR", () => {
    createdDomMock.mockReturnValue(false)
    const html = renderToString(<ThemeSchemeScript />)
    expect(html).toContain("<script")
    expect(html).toContain("localStorage")
  })

  test("renders a script tag with nonce during SSR", () => {
    createdDomMock.mockReturnValue(false)
    const html = renderToString(<ThemeSchemeScript nonce="test-nonce" />)
    expect(html).toContain("<script")
    expect(html).toContain('nonce="test-nonce"')
  })
})
