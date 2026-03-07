import type { StyledTheme, System, UsageTheme } from "../system"
import type { CSSObject, CSSObjectOrFunction } from "./index.types"
import { css as emotionCSS } from "@emotion/css"
import { useMemo } from "react"
import { toArray } from "../../utils"
import { useSystem, useTheme } from "../system"
import { css } from "./css"

export const useCSS = (
  value: CSSObject | CSSObject[] | CSSObjectOrFunction = [],
) => {
  const system = useSystem()
  const { theme } = useTheme<UsageTheme>()

  return useMemo(() => getCSS(system, theme)(value), [value, system, theme])
}

export const getCSS =
  (system: System, theme: StyledTheme<UsageTheme>) =>
  (value: CSSObject | CSSObject[] | CSSObjectOrFunction = []) =>
    emotionCSS(...toArray(value).map(css(system, theme)))
