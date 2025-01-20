import type { CSSUIObject, FC } from "../../core"
import type { MotionProps } from "../motion"
import { cx, runIfFunc } from "../../utils"
import { motion } from "../motion"
import { useRatingContext } from "./rating-context"
import { RatingItem } from "./rating-item"
import { getRoundedValue } from "./rating-utils"

interface RatingGroupOptions {
  items: number
  value: number
}

export interface RatingGroupProps extends MotionProps, RatingGroupOptions {}

export const RatingGroup: FC<RatingGroupProps> = ({
  ref,
  className,
  color,
  items,
  value: groupValue,
  ...rest
}) => {
  const { decimal, styles, getGroupProps, groupProps } = useRatingContext()
  const computedGroupProps = runIfFunc(groupProps, groupValue)
  const css: CSSUIObject = { ...styles.group }

  return (
    <motion.div
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
          const fractionValue = decimal * (groupValue === 1 ? index : index + 1)
          const value = getRoundedValue(groupValue - 1 + fractionValue, decimal)

          return (
            <RatingItem
              key={`${groupValue}-${fractionValue}`}
              color={color}
              fractionValue={fractionValue}
              groupValue={groupValue}
              value={value}
            />
          )
        })}
    </motion.div>
  )
}

RatingGroup.__ui__ = "RatingGroup"
