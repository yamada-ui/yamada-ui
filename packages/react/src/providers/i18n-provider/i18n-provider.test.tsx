import type { FC } from "react"
import { act, render, renderHook, screen, waitFor } from "#test"
import { useContext } from "react"
import { noop } from "../../utils"
import {
  getLanguage,
  I18nContext,
  I18nProvider,
  useI18n,
} from "./i18n-provider"

describe("getLanguage", () => {
  test("returns language with provided locale", () => {
    const lang = getLanguage("ja")

    expect(lang.locale).toBe("ja")
    expect(lang.dir).toBe("ltr")
  })

  test("returns rtl direction for rtl locale", () => {
    const lang = getLanguage("ar")

    expect(lang.dir).toBe("rtl")
  })

  test("falls back to default for unsupported locale", () => {
    const lang = getLanguage("invalid-xxxxx-yyy")

    expect(lang.locale).toBe("en-US")
  })

  test("uses provided dir override", () => {
    const lang = getLanguage("en", "rtl")

    expect(lang.locale).toBe("en")
    expect(lang.dir).toBe("rtl")
  })
})

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
          <button data-testid="change" onClick={() => changeLanguage("ja")} />
        </div>
      )
    }

    const { user } = render(
      <I18nProvider locale="en">
        <TestComponent />
      </I18nProvider>,
      { withProvider: false },
    )

    expect(screen.getByTestId("locale").textContent).toBe("en")

    await user.click(screen.getByTestId("change"))

    await waitFor(() => {
      expect(screen.getByTestId("locale").textContent).toBe("ja")
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

    expect(screen.getByTestId("locale").textContent).toBe("en")

    rerender(
      <I18nProvider locale="ja">
        <TestComponent />
      </I18nProvider>,
    )

    await waitFor(() => {
      expect(screen.getByTestId("locale").textContent).toBe("ja")
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
