import type { ColorMode } from "../../core"
import type { Environment } from "../environment-provider"
import { defaultEnvironment } from "../environment-provider"

export const getPreventTransition = (environment: Environment) => {
  const { getDocument, getWindow } = environment
  const win = getWindow()
  const doc = getDocument()

  if (!win || !doc) return

  const css = doc.createElement("style")

  const node = doc.createTextNode(
    `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
  )

  css.appendChild(node)

  doc.head.appendChild(css)

  return () => {
    const forceReflow = () => win.getComputedStyle(doc.body)

    forceReflow()

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css)
      })
    })
  }
}

const classNames = {
  light: "ui-light",
  dark: "ui-dark",
}

const queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)",
}

interface GetColorModeUtilsProps {
  environment?: Environment
  preventTransition?: boolean
}

export const getColorModeUtils = ({
  environment = defaultEnvironment,
  preventTransition = true,
}: GetColorModeUtilsProps) => {
  const { getDocument, getWindow } = environment

  const setDataset = (colorMode: ColorMode) => {
    const doc = getDocument()

    if (!doc) return

    const cleanup = preventTransition
      ? getPreventTransition(environment)
      : undefined

    doc.documentElement.dataset.mode = colorMode
    doc.documentElement.style.colorScheme = colorMode

    cleanup?.()
  }

  const setClassName = (isDark: boolean) => {
    const doc = getDocument()

    if (!doc) return

    doc.body.classList.add(isDark ? classNames.dark : classNames.light)
    doc.body.classList.remove(isDark ? classNames.light : classNames.dark)
  }

  const query = () => {
    return getWindow()?.matchMedia(queries.dark)
  }

  const getSystemColorMode = (fallback?: ColorMode) => {
    const mql = query()
    const dark = mql?.matches ?? fallback === "dark"

    return dark ? "dark" : "light"
  }

  const systemColorModeObserver = (func: (cm: ColorMode) => void) => {
    const mql = query()

    const listener = (e: MediaQueryListEvent) => {
      func(e.matches ? "dark" : "light")
    }

    if (typeof mql?.addListener === "function") {
      mql.addListener(listener)
    } else {
      mql?.addEventListener("change", listener)
    }

    return () => {
      if (typeof mql?.removeListener === "function") {
        mql.removeListener(listener)
      } else {
        mql?.removeEventListener("change", listener)
      }
    }
  }

  return {
    getSystemColorMode,
    query,
    setClassName,
    setDataset,
    systemColorModeObserver,
  }
}
