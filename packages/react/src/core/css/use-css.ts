import type { StyledTheme } from "../theme"
import type { CSSObject, CSSObjectOrFunc } from "./index.types"
import { css as emotionCSS } from "@emotion/css"
import { useMemo } from "react"
import { useTheme } from "../../providers/theme-provider"
import { css } from "./css"

export const useCSS = (cssObject: CSSObject | CSSObjectOrFunc = {}) => {
  const { theme } = useTheme()

  return useMemo(() => getCSS(theme)(cssObject), [cssObject, theme])
}

export const getCSS =
  (theme: StyledTheme) =>
  (cssObject: CSSObject | CSSObjectOrFunc = {}) =>
    emotionCSS(css(theme)(cssObject))
