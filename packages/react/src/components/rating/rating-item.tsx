import type { FC, HTMLUIProps } from "../../core"
import type { IconProps } from "../icon"
import type { UseRatingItemProps } from "./use-rating-item"
import { cloneElement } from "react"
import { forwardRef, ui } from "../../core"
import { cx, getValidChildren, isString, runIfFunc } from "../../utils"
import { Icon } from "../icon"
import { useRatingContext } from "./rating-context"
import { useRatingItem } from "./use-rating-item"

export interface RatingItemProps
  extends Omit<HTMLUIProps<"label">, "value">,
    UseRatingItemProps {}

export const RatingItem = forwardRef<RatingItemProps, "input">(
  ({ className, color, fractionValue, groupValue, value, ...rest }, ref) => {
    const {
      emptyIcon = <RatingStarIcon />,
      filledIcon = <RatingStarIcon />,
      styles,
      inputProps,
      itemProps,
    } = useRatingContext()
    const { active, filled, getInputProps, getItemProps } = useRatingItem({
      fractionValue,
      groupValue,
      value,
    })
    const computedItemProps = runIfFunc(itemProps, value)
    const computedInputProps = runIfFunc(inputProps, value)
    const customColor = color
      ? {
          _filled: {
            color: isString(color) ? [color, color] : color,
          },
        }
      : {}

    return (
      <>
        <ui.input {...getInputProps(computedInputProps, ref)} />

        <ui.label
          className={cx("ui-rating__item", className)}
          __css={{
            ...styles.item,
            ...customColor,
          }}
          {...getItemProps({ ...computedItemProps, ...rest })}
        >
          <RatingIcon
            clipPath={
              fractionValue !== 1
                ? `inset(0 ${active ? 100 - fractionValue * 100 : 100}% 0 0)`
                : undefined
            }
          >
            {filled
              ? runIfFunc(filledIcon, groupValue)
              : runIfFunc(emptyIcon, groupValue)}
          </RatingIcon>
        </ui.label>
      </>
    )
  },
)

RatingItem.displayName = "RatingItem"
RatingItem.__ui__ = "RatingItem"

interface RatingIconProps extends HTMLUIProps {}

const RatingIcon: FC<RatingIconProps> = ({ className, children, ...rest }) => {
  const { styles } = useRatingContext()
  const validChildren = getValidChildren(children)
  const cloneChildren = validChildren.map((child) =>
    cloneElement(child, {
      style: {
        maxHeight: "1em",
        maxWidth: "1em",
      },
      "aria-hidden": true,
      focusable: false,
    }),
  )

  return (
    <ui.div
      className={cx("ui-rating__item__icon", className)}
      __css={styles.icon}
      {...rest}
    >
      {cloneChildren}
    </ui.div>
  )
}

RatingIcon.displayName = "RatingIcon"
RatingIcon.__ui__ = "RatingIcon"

interface RatingStarIconProps extends IconProps {}

const RatingStarIcon: FC<RatingStarIconProps> = ({ ...rest }) => {
  return (
    <Icon
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </Icon>
  )
}

RatingStarIcon.displayName = "RatingStarIcon"
RatingStarIcon.__ui__ = "RatingStarIcon"
