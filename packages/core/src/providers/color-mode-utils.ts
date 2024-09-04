import type { ColorMode } from "../css"
import { defaultEnvironment, type Environment } from "./environment-provider"
import { preventTransition } from "./provider-utils"

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
  environment?: Environment
}

export const getColorModeUtils = ({
  isPreventTransition = true,
  environment = defaultEnvironment,
}: GetColorModeUtilsProps) => {
  const { getWindow, getDocument } = environment

  const setDataset = (colorMode: ColorMode) => {
    const doc = getDocument()

    const cleanup = isPreventTransition
      ? preventTransition(environment)
      : undefined

    if (!doc) return

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
    const win = getWindow()

    if (!win) return

    return win.matchMedia(queries.dark)
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
    setDataset,
    setClassName,
    query,
    getSystemColorMode,
    systemColorModeObserver,
  }
}
