import { ui, forwardRef, HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useAvatarContext } from "./avatar"

type AvatarBadgeOptions = {
  /**
   * The placement of the badge.
   *
   * @default 'bottom-end'
   */
  placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end"
}

export type AvatarBadgeProps = HTMLUIProps<"div"> & AvatarBadgeOptions

const placementStyles: Record<
  "top-start" | "top-end" | "bottom-start" | "bottom-end",
  CSSUIObject
> = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)",
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)",
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)",
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)",
  },
}

export const AvatarBadge = forwardRef<AvatarBadgeProps, "div">(
  ({ className, boxSize = "1em", placement = "bottom-end", ...rest }, ref) => {
    const styles = useAvatarContext()

    const css: CSSUIObject = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...placementStyles[placement],
      ...styles.badge,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-avatar__badge", className)}
        boxSize={boxSize}
        __css={css}
        {...rest}
      />
    )
  },
)
