import type { CSSUIObject, CSSUIProps, FC, HTMLUIProps } from "../../core"
import { useMemo } from "react"
import { mergeVars, ui } from "../../core"
import { calc, cx } from "../../utils"

interface BleedOptions {}

export interface BleedProps extends HTMLUIProps, BleedOptions {
  /**
   * The CSS `margin-block` property.
   */
  block?: CSSUIProps["marginBlock"]
  /**
   * The CSS `margin-block-end` property.
   */
  blockEnd?: CSSUIProps["marginBlockEnd"]
  /**
   * The CSS `margin-block-start` property.
   */
  blockStart?: CSSUIProps["marginBlockStart"]
  /**
   * The CSS `margin-inline` property.
   */
  inline?: "full" | CSSUIProps["marginInline"]
  /**
   * The CSS `margin-inline-end` property.
   */
  inlineEnd?: "full" | CSSUIProps["marginInlineEnd"]
  /**
   * The CSS `margin-inline-start` property.
   */
  inlineStart?: "full" | CSSUIProps["marginInlineStart"]
}

/**
 * `Bleed` is a component used to break an element from the boundaries of its container.
 *
 * @see Docs https://yamada-ui.com/components/layouts/bleed
 */
export const Bleed: FC<BleedProps> = ({
  className,
  block,
  blockEnd,
  blockStart,
  inline,
  inlineEnd,
  inlineStart,
  vars,
  ...rest
}) => {
  blockStart = blockStart ?? block
  blockEnd = blockEnd ?? block
  inlineStart = inlineStart ?? inline
  inlineEnd = inlineEnd ?? inline

  const css = useMemo<CSSUIObject>(() => {
    const inlineStartFull = inlineStart === "full"
    const inlineEndFull = inlineEnd === "full"

    const marginBlockStart = calc.negate("$blockStart")
    const marginBlockEnd = calc.negate("$blockEnd")
    const marginInlineStart = inlineStartFull
      ? "calc(50% - 50vw)"
      : calc.negate("$inlineStart")
    const marginInlineEnd = inlineEndFull
      ? "calc(50% - 50vw)"
      : calc.negate("$inlineEnd")

    return {
      marginBlockEnd,
      marginBlockStart,
      marginInlineEnd,
      marginInlineStart,
      vars: mergeVars(vars, [
        {
          name: "inlineStart",
          token: "spaces",
          value: inlineStart ?? inline,
        },
        { name: "inlineEnd", token: "spaces", value: inlineEnd ?? inline },
        { name: "blockStart", token: "spaces", value: blockStart ?? block },
        { name: "blockEnd", token: "spaces", value: blockEnd ?? block },
      ]),
    }
  }, [block, blockEnd, blockStart, inline, inlineEnd, inlineStart, vars])

  return <ui.div className={cx("ui-bleed", className)} __css={css} {...rest} />
}

Bleed.__ui__ = "Bleed"
