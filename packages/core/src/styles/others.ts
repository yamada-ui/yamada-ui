import type { Dict, StringLiteral } from "@yamada-ui/utils"
import { getMemoizedObject as get } from "@yamada-ui/utils"
import type { Token } from "../css"
import type { Configs, Transform } from "./config"

const transform: Transform = (value, theme, css = {}) => {
  const resolvedCSS: Dict = {}

  const style = get<Dict>(theme, `styles.${value}`, {})

  for (const prop in style) {
    const done = prop in css && css[prop] != null

    if (!done) resolvedCSS[prop] = style[prop]
  }

  return resolvedCSS
}

export const others: Configs = {
  layerStyle: {
    isProcessResult: true,
    transform: (value, ...rest) => transform(`layerStyles.${value}`, ...rest),
  },
  textStyle: {
    isProcessResult: true,
    transform: (value, ...rest) => transform(`textStyles.${value}`, ...rest),
  },
  apply: {
    isProcessResult: true,
    transform,
  },
}

export type OthersProps = {
  /**
   * Apply layer styles defined in `theme.layerStyles`.
   */
  layerStyle?: Token<StringLiteral, "layerStyles">
  /**
   * Apply text styles defined in `theme.textStyles`.
   */
  textStyle?: Token<StringLiteral, "textStyles">
  /**
   * Apply other styles defined in `theme.styles`.
   *
   * @example
   * ```jsx
   * <Box apply='mdx.h1'>Box</Box>
   * ```
   *
   * This will apply styles defined in `theme.styles.mdx.h1`
   */
  apply?: Token<StringLiteral>
}
