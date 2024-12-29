import type { StyledTheme } from "../theme.types"
import type { CSSObject, CSSObjectOrFunc } from "./css.types"
import { css as emotionCSS } from "@emotion/css"
import { useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import { css } from "./css"

export const useCSS = (cssObject: CSSObject | CSSObjectOrFunc = {}) => {
  const { theme } = useTheme()

  return useMemo(() => getCSS(cssObject)(theme), [cssObject, theme])
}

export const getCSS =
  (cssObject: CSSObject | CSSObjectOrFunc = {}) =>
  (theme: StyledTheme) =>
    emotionCSS(css(cssObject)(theme))
