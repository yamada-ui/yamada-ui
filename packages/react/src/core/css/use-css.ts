import type { StyledTheme } from "../theme.types"
import type { CSSObjectOrFunc, CSSUIObject } from "./css.types"
import { css as emotionCSS } from "@emotion/css"
import { useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import { css } from "./css"

export const useCSS = (cssObject: CSSObjectOrFunc | CSSUIObject = {}) => {
  const { theme } = useTheme()

  return useMemo(() => getCSS(cssObject)(theme), [cssObject, theme])
}

export const getCSS =
  (cssObject: CSSObjectOrFunc | CSSUIObject = {}) =>
  (theme: StyledTheme) =>
    emotionCSS(css(cssObject)(theme))
