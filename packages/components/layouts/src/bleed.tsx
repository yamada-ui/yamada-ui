import type { CSSUIObject, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, mergeVars, ui } from "@yamada-ui/core"
import { calc, cx } from "@yamada-ui/utils"
import { useMemo } from "react"

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
export const Bleed = forwardRef<BleedProps, "div">(
  (
    {
      className,
      block,
      blockEnd,
      blockStart,
      inline,
      inlineEnd,
      inlineStart,
      vars,
      ...rest
    },
    ref,
  ) => {
    blockStart = blockStart ?? block
    blockEnd = blockEnd ?? block
    inlineStart = inlineStart ?? inline
    inlineEnd = inlineEnd ?? inline

    const css = useMemo<CSSUIObject>(() => {
      const isInlineStartFull = inlineStart === "full"
      const isInlineEndFull = inlineEnd === "full"

      const marginBlockStart = calc.negate("$blockStart")
      const marginBlockEnd = calc.negate("$blockEnd")
      const marginInlineStart = isInlineStartFull
        ? "calc(50% - 50vw)"
        : calc.negate("$inlineStart")
      const marginInlineEnd = isInlineEndFull
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

    return (
      <ui.div
        ref={ref}
        className={cx("ui-bleed", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

Bleed.displayName = "Bleed"
Bleed.__ui__ = "Bleed"
