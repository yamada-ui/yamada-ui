import { ColorMode } from "../css"

const classNames = {
  light: "ui-light",
  dark: "ui-dark",
}

const queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)",
}

type GetColorModeUtilsProps = {
  isPreventTransition?: boolean
}

export const getColorModeUtils = ({
  isPreventTransition = true,
}: GetColorModeUtilsProps) => {
  const setDataset = (colorMode: ColorMode) => {
    const cleanup = isPreventTransition ? preventTransition() : undefined

    document.documentElement.dataset.mode = colorMode
    document.documentElement.style.colorScheme = colorMode

    cleanup?.()
  }

  const setClassName = (isDark: boolean) => {
    document.body.classList.add(isDark ? classNames.dark : classNames.light)
    document.body.classList.remove(isDark ? classNames.light : classNames.dark)
  }

  const query = () => window.matchMedia(queries.dark)

  const getSystemColorMode = (fallback?: ColorMode) => {
    const dark = query().matches ?? fallback === "dark"

    return dark ? "dark" : "light"
  }

  const addListener = (func: (cm: ColorMode) => unknown) => {
    const mql = query()

    const listener = (e: MediaQueryListEvent) => {
      func(e.matches ? "dark" : "light")
    }

    if (typeof mql.addListener === "function") {
      mql.addListener(listener)
    } else {
      mql.addEventListener("change", listener)
    }

    return () => {
      if (typeof mql.removeListener === "function") {
        mql.removeListener(listener)
      } else {
        mql.removeEventListener("change", listener)
      }
    }
  }

  const preventTransition = () => {
    const css = document.createElement("style")

    const node = document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
    )

    css.appendChild(node)

    document.head.appendChild(css)

    return () => {
      ;(() => window.getComputedStyle(document.body))()

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.head.removeChild(css)
        })
      })
    }
  }

  return {
    setDataset,
    setClassName,
    query,
    getSystemColorMode,
    addListener,
    preventTransition,
  }
}
