"use client"

import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { FloatStyle } from "./float.style"
import { createComponent, varAttr } from "../../core"
import { isArray } from "../../utils"
import { floatStyle } from "./float.style"

export interface FloatProps
  extends Omit<HTMLStyledProps, "offset">,
    ThemeProps<FloatStyle> {
  /**
   * Changes position offset.
   */
  offset?: CSSProps["inset"]
}

const {
  PropsContext: FloatPropsContext,
  usePropsContext: useFloatPropsContext,
  withContext,
} = createComponent<FloatProps, FloatStyle>("float", floatStyle)

export { FloatPropsContext, useFloatPropsContext }

/**
 * `Float` is a component used to anchor an element to the edge of a container.
 *
 * @see https://yamada-ui.com/components/float
 */
export const Float = withContext("div")(undefined, ({ offset, ...rest }) => {
  const [offsetBlock, offsetInline] = isArray(offset)
    ? offset
    : [offset, offset]

  return {
    "--offset-block": varAttr(offsetBlock, "spaces"),
    "--offset-inline": varAttr(offsetInline, "spaces"),
    ...rest,
  }
})
