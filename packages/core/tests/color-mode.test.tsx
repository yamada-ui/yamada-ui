import { act, render, renderHook } from "@yamada-ui/test"
import {
  COLOR_MODE_STORAGE_KEY,
  colorModeManager,
  ColorModeProvider,
  ColorModeScript,
  createColorModeManager,
  useColorMode,
  useColorModeValue,
} from "../src"

describe("ColorModeProvider", () => {
  test("provides a color mode to child components", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    expect(result.current.colorMode).toBe("light")
  })

  test("allows color mode updates through changeColorMode", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    act(() => {
      result.current.changeColorMode("dark")
    })

    expect(result.current.colorMode).toBe("dark")
  })

  test("change system mode", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    act(() => {
      result.current.changeColorMode("system")
    })

    expect(result.current.internalColorMode).toBe("system")
  })

  test("toggles color mode between light and dark", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider>{children}</ColorModeProvider>
      ),
    })

    act(() => {
      result.current.toggleColorMode()
    })

    expect(result.current.colorMode).toBe("dark")

    act(() => {
      result.current.toggleColorMode()
    })

    expect(result.current.colorMode).toBe("light")
  })

  test("forced dark mode", () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: ({ children }) => (
        <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
      ),
    })

    expect(result.current.colorMode).toBe("dark")
  })

  test("returns light value in light mode", () => {
    const { result } = renderHook(
      () => useColorModeValue("lightValue", "darkValue"),
      {
        wrapper: ({ children }) => (
          <ColorModeProvider colorMode="light">{children}</ColorModeProvider>
        ),
      },
    )

    expect(result.current).toBe("lightValue")
  })

  test("returns dark value in dark mode", () => {
    const { result } = renderHook(
      () => useColorModeValue("lightValue", "darkValue"),
      {
        wrapper: ({ children }) => (
          <ColorModeProvider colorMode="dark">{children}</ColorModeProvider>
        ),
      },
    )

    expect(result.current).toBe("darkValue")
  })
})

describe("colorModeManager", () => {
  describe("localStorage", () => {
    beforeEach(() => {
      localStorage.clear()
    })

    test("gets initial color mode", () => {
      const manager = colorModeManager.localStorage
      expect(manager.get()()).toBe("light")
    })

    test("sets and gets color mode", () => {
      const manager = colorModeManager.localStorage
      manager.set("dark")()
      expect(manager.get()()).toBe("dark")
    })

    test("returns default value if invalid value is in localStorage", () => {
      localStorage.setItem("colorMode", "invalid")
      const manager = colorModeManager.localStorage
      expect(manager.get()()).toBe("light")
    })
  })

  describe("cookieStorage", () => {
    const originalDocumentCookie = document.cookie

    afterEach(() => {
      document.cookie = originalDocumentCookie
    })

    test("gets initial color mode", () => {
      const manager = colorModeManager.cookieStorage
      expect(manager.get()()).toBe("light")
    })

    test("sets and gets color mode", () => {
      const manager = colorModeManager.cookieStorage
      manager.set("dark")()
      expect(manager.get()()).toBe("dark")
    })
  })

  describe("ssr", () => {
    test("gets color mode from cookie", () => {
      const cookie = `${COLOR_MODE_STORAGE_KEY}=dark`
      const manager = colorModeManager.ssr(cookie)
      expect(manager.get()(COLOR_MODE_STORAGE_KEY)).toBe("dark")
    })
  })

  describe("createColorModeManager", () => {
    test("creates manager with localStorage type", () => {
      const manager = createColorModeManager("local")
      expect(manager.type).toBe("localStorage")
    })

    test("creates manager with cookie type", () => {
      const manager = createColorModeManager("cookie")
      expect(manager.type).toBe("cookie")
    })

    test("creates manager with ssr type", () => {
      const manager = createColorModeManager("ssr", "colorMode=dark")
      expect(manager.type).toBe("cookie")
      expect(manager.ssr).toBeTruthy()
    })
  })
})

describe("ColorModeScript", () => {
  test("sets the correct color mode on initial render", () => {
    render(<ColorModeScript initialColorMode="dark" />)

    const scriptTag = document.getElementById("ui-color-mode-script")

    expect(scriptTag?.textContent).toContain(
      `!(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="ui-light",d="ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.mode=r,r},m="dark",e="ui-color-mode",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`,
    )
  })

  test("change cookie mode", () => {
    render(<ColorModeScript type="cookie" />)

    const scriptTag = document.getElementById("ui-color-mode-script")

    expect(scriptTag?.textContent).toContain(
      `!(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="ui-light",n="ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.mode=e,e},h="light",r="ui-color-mode",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();`,
    )
  })
})
