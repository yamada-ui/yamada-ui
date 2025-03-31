import type { CSSUIObject, CSSUIProps, FC, HTMLUIProps } from "../../core"
import { useMemo } from "react"
import { ui } from "../../core"
import { cx, isArray } from "../../utils"

const getPlacementStyle = (
  placement: FloatPlacement = "start-end",
  offset: CSSUIProps["inset"] = "0",
): CSSUIObject => {
  const [block, inline] = placement.split("-")
  const [offsetBlock, offsetInline] = isArray(offset)
    ? offset
    : [offset, offset]
  const styles: CSSUIObject = {}
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

export type FloatPlacement =
  | "center-center"
  | "center-end"
  | "center-start"
  | "end-center"
  | "end-end"
  | "end-start"
  | "start-center"
  | "start-end"
  | "start-start"

interface FloatOptions {
  /**
   * Changes position offset, usually used when element has border-radius.
   */
  offset?: CSSUIProps["inset"]
  /**
   * The placement of the float.
   *
   * @default "start-end"
   */
  placement?: FloatPlacement
}

export interface FloatProps extends Omit<HTMLUIProps, "offset">, FloatOptions {}

/**
 * `Float` is a component used to anchor an element to the edge of a container.
 *
 * @see https://yamada-ui.com/components/layouts/float
 */
export const Float: FC<FloatProps> = ({
  className,
  offset,
  placement,
  ...rest
}) => {
  const css = useMemo<CSSUIObject>(
    () => ({
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
      position: "absolute",
      ...getPlacementStyle(placement, offset),
    }),
    [placement, offset],
  )

  return <ui.div className={cx("ui-float", className)} __css={css} {...rest} />
}

Float.__ui__ = "Float"
