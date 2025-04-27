import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { FloatStyle } from "./float.style"
import { createComponent, mergeVars } from "../../core"
import { isArray } from "../../utils"
import { floatStyle } from "./float.style"

export interface FloatProps
  extends Omit<HTMLStyledProps, "offset">,
    ThemeProps<FloatStyle> {
  /**
   * Changes position offset, usually used when element has border-radius.
   */
  offset?: CSSProps["inset"]
}

export const {
  PropsContext: FloatPropsContext,
  usePropsContext: useFloatPropsContext,
  withContext,
} = createComponent<FloatProps, FloatStyle>("float", floatStyle)

/**
 * `Float` is a component used to anchor an element to the edge of a container.
 *
 * @see https://yamada-ui.com/components/float
 */
export const Float = withContext("div")(
  undefined,
  ({ offset, vars, ...rest }) => {
    const [offsetBlock, offsetInline] = isArray(offset)
      ? offset
      : [offset, offset]

    return {
      vars: mergeVars(
        vars,
        {
          name: "offsetBlock",
          token: "spaces",
          value: offsetBlock,
        },
        {
          name: "offsetInline",
          token: "spaces",
          value: offsetInline,
        },
      ),
      ...rest,
    }
  },
)
