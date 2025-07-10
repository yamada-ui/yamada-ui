"use client"

import type { Dict } from "../../utils"
import type { CSSObject, CSSProperties } from "./index.types"
import { useMemo, useRef } from "react"
import { cssProps } from "../components"
import { injectVars } from "../system"

export function useInjectVarsIntoCss(
  css: CSSObject | CSSObject[] | undefined,
  targets: { [key in CSSProperties]?: string },
) {
  const targetsRef = useRef(targets)

  return useMemo(() => injectVars(css, targetsRef.current), [css])
}

export function useInjectVarsIntoProps<Y extends Dict | undefined>(
  props: Y,
  targets: { [key in CSSProperties]?: string },
) {
  const targetsRef = useRef(targets)

  return useMemo(
    () => injectVars(props, targetsRef.current, (prop) => !cssProps.has(prop)),
    [props],
  )
}
