import type { StyledTheme } from "../theme"
import type { CSSObject, CSSObjectOrFunction } from "./index.types"
import { css as emotionCSS } from "@emotion/css"
import { useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import { css } from "./css"

export const useCSS = (cssObject: CSSObject | CSSObjectOrFunction = {}) => {
  const { theme } = useTheme()

  return useMemo(() => getCSS(theme)(cssObject), [cssObject, theme])
}

export const getCSS =
  (theme: StyledTheme) =>
  (cssObject: CSSObject | CSSObjectOrFunction = {}) =>
    emotionCSS(css(theme)(cssObject))
