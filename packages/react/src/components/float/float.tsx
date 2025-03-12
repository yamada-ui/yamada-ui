import type { CSSObject, CSSProps, HTMLUIProps, Placement } from "../../core"
import type { FloatStyle } from "./float.style"
import { createComponent } from "../../core"
import { isArray } from "../../utils"
import { floatStyle } from "./float.style"

const getPlacementStyle = (
  placement: Placement = "start-end",
  offset: CSSProps["inset"] = "0",
): CSSObject => {
  let [block, inline] = placement.split("-")
  inline ??= block

  const [offsetBlock, offsetInline] = isArray(offset)
    ? offset
    : [offset, offset]
  const styles: CSSObject = {}
  let translateX = "0%"
  let translateY = "0%"

  if (block === "start") {
    styles.insetBlockStart = offsetBlock
    styles.insetBlockEnd = "auto"
    translateY = "-50%"
  } else if (block === "end") {
    styles.insetBlockStart = "auto"
    styles.insetBlockEnd = offsetBlock
    translateY = "50%"
  } else {
    styles.insetBlock = "50%"
  }

  if (inline === "start") {
    styles.insetInlineStart = offsetInline
    styles.insetInlineEnd = "auto"
    translateX = "-50%"
  } else if (inline === "end") {
    styles.insetInlineStart = "auto"
    styles.insetInlineEnd = offsetInline
    translateX = "50%"
  } else {
    styles.insetInline = "50%"
  }

  styles.translate = `${translateX} ${translateY}`

  return styles
}

export interface FloatProps extends Omit<HTMLUIProps, "offset"> {
  /**
   * Changes position offset, usually used when element has border-radius.
   */
  offset?: CSSProps["inset"]
  /**
   * The placement of the float.
   *
   * @default "start-end"
   */
  placement?: Placement
}

export const {
  PropsContext: FloatPropsContext,
  usePropsContext: useFloatPropsContext,
  withContext,
} = createComponent<FloatProps, FloatStyle>("float", floatStyle)

/**
 * `Float` is a component used to anchor an element to the edge of a container.
 *
 * @see Docs https://yamada-ui.com/components/float
 */
export const Float = withContext<"div", FloatProps>("div")(
  undefined,
  ({ offset, placement, ...rest }) => ({
    ...getPlacementStyle(placement, offset),
    ...rest,
  }),
)
