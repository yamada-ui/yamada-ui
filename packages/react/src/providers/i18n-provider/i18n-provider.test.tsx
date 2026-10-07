import type { FC } from "react"
import type * as Utils from "../../utils"
import { useContext } from "react"
import { act, render, renderHook, screen, waitFor } from "#test"
import { createdDom, noop } from "../../utils"
import { I18nContext, I18nProvider, useI18n } from "./i18n-provider"

vi.mock("../../utils", async (importOriginal) => {
  const actual = await importOriginal<typeof Utils>()

  return { ...actual, createdDom: vi.fn(() => true) }
})

const LocaleText: FC = () => {
  const { locale } = useI18n()

  return <span data-testid="locale">{locale}</span>
}

const renderLocale = (props: Parameters<typeof I18nProvider>[0]) => {
  render(
    <I18nProvider {...props}>
      <LocaleText />
    </I18nProvider>,
    { withProvider: false },
  )

  return screen.getByTestId("locale").textContent
}

describe("I18nProvider", () => {
  test("renders children", () => {
    render(
      <I18nProvider>
        <div data-testid="child">Hello</div>
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("child")).toBeInTheDocument()
  })

  test("changeLanguage updates locale", async () => {
    const TestComponent: FC = () => {
      const { changeLanguage, locale } = useI18n()

      return (
        <div>
          <span data-testid="locale">{locale}</span>
          <button data-testid="change" onClick={() => changeLanguage("ja")}>
            Change
          </button>
        </div>
      )
    }

    const { user } = render(
      <I18nProvider locale="en">
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("locale").textContent).toBe("en-GB")

    await user.click(screen.getByTestId("change"))

    await waitFor(() => {
      expect(screen.getByTestId("locale").textContent).toBe("ja-JP")
    })
  })

  test("listens to languagechange when uncontrolled", () => {
    const addSpy = vi.spyOn(window, "addEventListener")
    const removeSpy = vi.spyOn(window, "removeEventListener")

    const { unmount } = render(
      <I18nProvider>
        <div />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(addSpy).toHaveBeenCalledWith("languagechange", expect.any(Function))

    unmount()

    expect(removeSpy).toHaveBeenCalledWith(
      "languagechange",
      expect.any(Function),
    )

    addSpy.mockRestore()
    removeSpy.mockRestore()
  })

  test("does not listen to languagechange when controlled", () => {
    const addSpy = vi.spyOn(window, "addEventListener")

    render(
      <I18nProvider locale="en">
        <div />
      </I18nProvider>,
      { withProvider: false },
    )

    const calls = addSpy.mock.calls.filter(
      ([event]) => event === "languagechange",
    )

    expect(calls).toHaveLength(0)

    addSpy.mockRestore()
  })

  test("updates language when languagechange event is fired", async () => {
    const TestComponent: FC = () => {
      const { locale } = useI18n()

      return <span data-testid="locale">{locale}</span>
    }

    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    act(() => {
      window.dispatchEvent(new Event("languagechange"))
    })

    await waitFor(() => {
      expect(screen.getByTestId("locale")).toBeInTheDocument()
    })
  })

  test("updates language when forcedLocale prop changes", async () => {
    const TestComponent: FC = () => {
      const { locale } = useI18n()

      return <span data-testid="locale">{locale}</span>
    }

    const { rerender } = render(
      <I18nProvider locale="en">
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("locale").textContent).toBe("en-GB")

    rerender(
      <I18nProvider locale="ja">
        <TestComponent />
      </I18nProvider>,
    )

    await waitFor(() => {
      expect(screen.getByTestId("locale").textContent).toBe("ja-JP")
    })
  })

  test("uses language-only messages for a regional locale", () => {
    const intl = {
      ja: {
        closeButton: {
          Close: "閉じる",
        },
      },
    }

    const { result } = renderHook(() => useI18n(), {
      providerProps: { intl, locale: "ja-JP" },
    })

    expect(result.current.locale).toBe("ja")
    expect(result.current.t("closeButton.Close" as any)).toBe("閉じる")
  })

  test("uses an available fallback locale", () => {
    const intl = {
      "en-GB": {
        closeButton: {
          Close: "Close",
        },
      },
    }

    const { result } = renderHook(() => useI18n(), {
      providerProps: { intl, locale: "jk" },
    })

    expect(result.current.locale).toBe("en-GB")
    expect(result.current.t("closeButton.Close" as any)).toBe("Close")
  })

  test("determines direction from locale", () => {
    const { result } = renderHook(() => useI18n(), {
      providerProps: { locale: "ar" },
    })

    expect(result.current.locale).toBe("ar-AE")
    expect(result.current.dir).toBe("rtl")
  })

  test("uses a forced direction", () => {
    const { result } = renderHook(() => useI18n(), {
      providerProps: { dir: "rtl", locale: "en" },
    })

    expect(result.current.locale).toBe("en-GB")
    expect(result.current.dir).toBe("rtl")
  })

  test("re-resolves the locale when intl changes", async () => {
    const englishIntl = {
      "en-US": {
        closeButton: {
          Close: "Close",
        },
      },
    }
    const japaneseIntl = {
      "ja-JP": {
        closeButton: {
          Close: "閉じる",
        },
      },
    }
    const TestComponent: FC = () => {
      const { locale, t } = useI18n()

      return (
        <>
          <span data-testid="locale">{locale}</span>
          <span data-testid="translation">{t("closeButton.Close" as any)}</span>
        </>
      )
    }
    const { rerender } = render(
      <I18nProvider intl={englishIntl} locale="ja">
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("locale").textContent).toBe("en-US")

    rerender(
      <I18nProvider intl={japaneseIntl} locale="ja">
        <TestComponent />
      </I18nProvider>,
    )

    await waitFor(() => {
      expect(screen.getByTestId("locale").textContent).toBe("ja-JP")
      expect(screen.getByTestId("translation").textContent).toBe("閉じる")
    })
  })

  test("translation with replaceValues formats message", () => {
    const customIntl = {
      "en-US": {
        carousel: {
          "Go to {page} slide": "Go to {page} slide",
        },
      },
    }

    const TestComponent: FC = () => {
      const { t } = useI18n()

      return (
        <span data-testid="result">
          {t("carousel.Go to {page} slide" as any, { page: "3" } as any)}
        </span>
      )
    }

    render(
      <I18nProvider intl={customIntl} locale="en-US">
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("result").textContent).toBe("Go to 3 slide")
  })

  test("translation with non-string replaceValues", () => {
    const customIntl = {
      "en-US": {
        test: {
          "Count is {count}": "Count is {count}",
        },
      },
    }

    const TestComponent: FC = () => {
      const { t } = useI18n()

      return (
        <span data-testid="result">
          {t("test.Count is {count}" as any, { count: 5 } as any)}
        </span>
      )
    }

    render(
      <I18nProvider intl={customIntl} locale="en-US">
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("result").textContent).toBe("Count is 5")
  })

  test("translation resolves string replaceValues as paths", () => {
    const customIntl = {
      "en-US": {
        closeButton: { Close: "Close" },
        test: { "Press {label}": "Press {label}" },
      },
    }
    const TestComponent: FC = () => {
      const { t } = useI18n()

      return (
        <span data-testid="result">
          {t(
            "test.Press {label}" as any,
            { label: "closeButton.Close" } as any,
          )}
        </span>
      )
    }

    render(
      <I18nProvider intl={customIntl} locale="en-US">
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("result").textContent).toBe("Press Close")
  })

  test("translation returns value when IntlMessageFormat throws", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    const customIntl = {
      "en-US": {
        test: {
          broken: "{invalid, select,}",
        },
      },
    }

    const TestComponent: FC = () => {
      const { t } = useI18n()

      return (
        <span data-testid="result">
          {t("test.broken" as any, { invalid: "value" } as any)}
        </span>
      )
    }

    render(
      <I18nProvider intl={customIntl} locale="en-US">
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("result").textContent).toBe("{invalid, select,}")

    warnSpy.mockRestore()
  })
})

describe("I18nProvider locale resolution", () => {
  const intl = { "de-DE": {}, "en-US": {}, "ja-JP": {} }

  afterEach(() => {
    vi.mocked(createdDom).mockReturnValue(true)
    vi.restoreAllMocks()
  })

  test.each([
    ["ja-JP", undefined, "ja-JP"],
    ["ja-XX", undefined, "ja-JP"],
    ["!!", "en-US", "en-US"],
  ])(
    "uses the locale for browser language %s and fallback %s when uncontrolled",
    (language, fallbackLocale, expected) => {
      vi.spyOn(navigator, "language", "get").mockReturnValue(language)

      expect(renderLocale({ fallbackLocale, intl })).toBe(expected)
    },
  )

  test.each([
    ["ja-XX", true, "ja-JP"],
    ["ja-XX", false, "ja-JP"],
    ["fr-FR", true, "de-DE"],
    ["fr-FR", false, "de-DE"],
  ])(
    "resolves an unknown locale with fallback %s when createdDom is %s",
    (fallbackLocale, mounted, expected) => {
      vi.mocked(createdDom).mockReturnValue(mounted)

      expect(renderLocale({ fallbackLocale, intl, locale: "xx" })).toBe(
        expected,
      )
    },
  )

  test("uses the fallback locale without a DOM when uncontrolled", () => {
    vi.mocked(createdDom).mockReturnValue(false)

    expect(renderLocale({ fallbackLocale: "en-US", intl })).toBe("en-US")
  })

  test("uses the first locale when the fallback locale is invalid", () => {
    expect(renderLocale({ fallbackLocale: "!!", intl, locale: "xx" })).toBe(
      "de-DE",
    )
  })

  test("uses the fallback locale when a locale is not supported", () => {
    expect(
      renderLocale({
        intl: { "de-DE": {}, "en-US": {}, invalid_tag: {} },
        locale: "invalid_tag",
      }),
    ).toBe("en-US")
  })

  test("uses the default messages when intl is empty", () => {
    expect(renderLocale({ intl: {}, locale: "ja" })).toBe("ja-JP")
  })
})

describe("useI18n", () => {
  test("returns translation function with key", () => {
    const { result } = renderHook(() => useI18n("closeButton"))

    expect(typeof result.current.t).toBe("function")
  })

  test("returns context without key", () => {
    const { result } = renderHook(() => useI18n())

    expect(result.current.locale).toBeDefined()
    expect(result.current.dir).toBeDefined()
    expect(typeof result.current.t).toBe("function")
    expect(typeof result.current.changeLanguage).toBe("function")
  })

  test("translation returns path when value not found", () => {
    const { result } = renderHook(() => useI18n())

    const translated = result.current.t("nonexistent.path" as any)

    expect(translated).toBe("nonexistent.path")
  })

  test("translation with key resolves relative paths", () => {
    const { result } = renderHook(() => useI18n("closeButton"), {
      providerProps: { locale: "ja-JP" },
    })

    expect(result.current.t("Close" as any)).toBe("閉じる")
  })

  test("translation returns known value", () => {
    const { result } = renderHook(() => useI18n(), {
      providerProps: { locale: "en-US" },
    })

    const translated = result.current.t("closeButton.Close" as any)

    expect(translated).toBe("Close")
  })
})

describe("I18nContext default value", () => {
  test("default getTranslation returns empty string", () => {
    const TestComponent: FC = () => {
      const ctx = useContext(I18nContext)
      const t = ctx.getTranslation()

      return <span data-testid="result">{t("test" as any)}</span>
    }

    render(<TestComponent />, { withProvider: false })

    expect(screen.getByTestId("result").textContent).toBe("")
  })

  test("default t returns empty string", () => {
    const TestComponent: FC = () => {
      const ctx = useContext(I18nContext)

      return <span data-testid="result">{ctx.t("test" as any)}</span>
    }

    render(<TestComponent />, { withProvider: false })

    expect(screen.getByTestId("result").textContent).toBe("")
  })
})
