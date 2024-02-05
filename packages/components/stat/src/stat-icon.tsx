import type { CSSUIObject } from "@yamada-ui/core"
import { forwardRef } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { useStat } from "./stat"

type StatIconOptions = {
  /**
   * @default "increase"
   */
  type?: "increase" | "decrease"
}

export type StatIconProps = IconProps & StatIconOptions

export const StatIcon = forwardRef<StatIconProps, "svg">(
  ({ className, type = "increase", ...rest }, ref) => {
    const styles = useStat()

    const css: CSSUIObject = { ...styles.icon }

    return (
      <Icon
        ref={ref}
        className={cx("ui-stat__icon", className)}
        aria-label={type === "increase" ? "Increased by" : "Decreased by"}
        viewBox="0 0 24 24"
        __css={css}
        {...rest}
      >
        {type === "increase" ? (
          <path
            fill="var(--ui-increase)"
            d="M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
          />
        ) : (
          <path
            fill="var(--ui-decrease)"
            d="M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
          />
        )}
      </Icon>
    )
  },
)
