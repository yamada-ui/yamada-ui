import type { CSSProps, HTMLStyledProps } from "../../core"
import type { BleedStyle } from "./bleed.style"
import { createComponent, mergeVars } from "../../core"
import { calc } from "../../utils"
import { bleedStyle } from "./bleed.style"

interface BleedOptions {}

export interface BleedProps extends HTMLStyledProps, BleedOptions {
  /**
   * The CSS `margin-block` property.
   */
  block?: CSSProps["marginBlock"]
  /**
   * The CSS `margin-block-end` property.
   */
  blockEnd?: CSSProps["marginBlockEnd"]
  /**
   * The CSS `margin-block-start` property.
   */
  blockStart?: CSSProps["marginBlockStart"]
  /**
   * The CSS `margin-inline` property.
   */
  inline?: "full" | CSSProps["marginInline"]
  /**
   * The CSS `margin-inline-end` property.
   */
  inlineEnd?: "full" | CSSProps["marginInlineEnd"]
  /**
   * The CSS `margin-inline-start` property.
   */
  inlineStart?: "full" | CSSProps["marginInlineStart"]
}

export const {
  PropsContext: BleedPropsContext,
  usePropsContext: useBleedPropsContext,
  withContext,
} = createComponent<BleedProps, BleedStyle>("bleed", bleedStyle)

/**
 * `Bleed` is a component used to break an element from the boundaries of its container.
 *
 * @see Docs https://yamada-ui.com/components/bleed
 */
export const Bleed = withContext("div")(
  undefined,
  ({
    block,
    blockEnd,
    blockStart,
    inline,
    inlineEnd,
    inlineStart,
    vars,
    ...rest
  }) => {
    blockStart ??= block
    blockEnd ??= block
    inlineStart ??= inline
    inlineEnd ??= inline

    const inlineStartFull = inlineStart === "full"
    const inlineEndFull = inlineEnd === "full"

    const marginBlockStart = calc.negate("{blockStart}")
    const marginBlockEnd = calc.negate("{blockEnd}")
    const marginInlineStart = inlineStartFull
      ? "calc(50% - 50vw)"
      : calc.negate("{inlineStart}")
    const marginInlineEnd = inlineEndFull
      ? "calc(50% - 50vw)"
      : calc.negate("{inlineEnd}")

    return {
      ...rest,
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
  },
)
