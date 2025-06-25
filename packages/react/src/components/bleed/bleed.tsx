"use client"

import type { CSSProps, HTMLStyledProps } from "../../core"
import type { BleedStyle } from "./bleed.style"
import { createComponent, varAttr } from "../../core"
import { calc } from "../../utils"
import { bleedStyle } from "./bleed.style"

export interface BleedProps extends HTMLStyledProps {
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
 * @see https://yamada-ui.com/components/bleed
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
    ...rest
  }) => {
    blockStart ??= block
    blockEnd ??= block
    inlineStart ??= inline
    inlineEnd ??= inline

    const inlineStartFull = inlineStart === "full"
    const inlineEndFull = inlineEnd === "full"

    const marginBlockStart = calc.negate("{block-start}")
    const marginBlockEnd = calc.negate("{block-end}")
    const marginInlineStart = inlineStartFull
      ? "calc(50% - 50vw)"
      : calc.negate("{inline-start}")
    const marginInlineEnd = inlineEndFull
      ? "calc(50% - 50vw)"
      : calc.negate("{inline-end}")

    return {
      ...rest,
      "--block-end": varAttr(blockEnd, "spaces"),
      "--block-start": varAttr(blockStart, "spaces"),
      "--inline-end": varAttr(inlineEnd, "spaces"),
      "--inline-start": varAttr(inlineStart, "spaces"),
      marginBlockEnd,
      marginBlockStart,
      marginInlineEnd,
      marginInlineStart,
    }
  },
)
