import { forwardRef } from "@yamada-ui/core"
import type { CSSUIObject } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import { Motion } from "@yamada-ui/motion"
import { cx, runIfFunc } from "@yamada-ui/utils"
import { RatingItem } from "./rating-item"
import { getRoundedValue, useRatingContext } from "./use-rating"

type RatingGroupOptions = {
  value: number
  items: number
}

export type RatingGroupProps = MotionProps<"div"> & RatingGroupOptions

export const RatingGroup = forwardRef<RatingGroupProps, "div">(
  ({ className, value: groupValue, items, color, ...rest }, ref) => {
    const { styles, decimal, groupProps, getGroupProps } = useRatingContext()

    const computedGroupProps = runIfFunc(groupProps, groupValue)

    const css: CSSUIObject = { ...styles.group }

    return (
      <Motion
        className={cx("ui-rating__group", className)}
        __css={css}
        {...getGroupProps(
          { value: groupValue, ...computedGroupProps, ...rest },
          ref,
        )}
      >
        {Array(items)
          .fill(0)
          .map((_, index) => {
            const fractionValue =
              decimal * (groupValue === 1 ? index : index + 1)
            const value = getRoundedValue(
              groupValue - 1 + fractionValue,
              decimal,
            )

            return (
              <RatingItem
                key={`${groupValue}-${fractionValue}`}
                groupValue={groupValue}
                value={value}
                fractionValue={fractionValue}
                color={color}
              />
            )
          })}
      </Motion>
    )
  },
)
