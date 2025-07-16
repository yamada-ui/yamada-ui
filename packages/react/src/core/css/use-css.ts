import type { StyledTheme, System, UsageTheme } from "../system"
import type { CSSObject, CSSObjectOrFunction } from "./index.types"
import { css as emotionCSS } from "@emotion/css"
import { useMemo } from "react"
import { useSystem, useTheme } from "../system"
import { css } from "./css"

export const useCSS = (cssObject: CSSObject | CSSObjectOrFunction = {}) => {
  const system = useSystem()
  const { theme } = useTheme<UsageTheme>()

  return useMemo(
    () => getCSS(system, theme)(cssObject),
    [cssObject, system, theme],
  )
}

export const getCSS =
  (system: System, theme: StyledTheme<UsageTheme>) =>
  (cssObject: CSSObject | CSSObjectOrFunction = {}) =>
    emotionCSS(css(system, theme)(cssObject))
