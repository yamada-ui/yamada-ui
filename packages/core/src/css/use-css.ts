import type { StyledTheme } from "../theme.types"
import type { CSSObjectOrFunc, CSSUIObject } from "./css.types"
import { css as emotionCSS } from "@emotion/css"
import { ThemeContext } from "@emotion/react"
import { useContext, useMemo } from "react"
import { css } from "./css"

export const useCSS = (cssObject: CSSObjectOrFunc | CSSUIObject = {}) => {
  const theme = useContext(ThemeContext) as StyledTheme

  return useMemo(() => getCSS(cssObject)(theme), [cssObject, theme])
}

export const getCSS =
  (cssObject: CSSObjectOrFunc | CSSUIObject = {}) =>
  (theme: StyledTheme) =>
    emotionCSS(css(cssObject)(theme))
