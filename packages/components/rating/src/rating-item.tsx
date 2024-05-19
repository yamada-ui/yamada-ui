import { ui, forwardRef } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon } from "@yamada-ui/icon"
import { cx, getValidChildren, isString, runIfFunc } from "@yamada-ui/utils"
import { cloneElement, type FC } from "react"
import type { UseRatingItemProps } from "./use-rating"
import { useRatingContext, useRatingItem } from "./use-rating"

export type RatingItemProps = HTMLUIProps<"input"> & UseRatingItemProps

export const RatingItem = forwardRef<RatingItemProps, "input">(
  ({ className, groupValue, value, fractionValue, color, ...rest }, ref) => {
    const {
      styles,
      inputProps,
      emptyIcon = <StarIcon />,
      filledIcon = <StarIcon />,
      itemProps,
    } = useRatingContext()
    const { isActive, isFilled, getInputProps, getItemProps } = useRatingItem({
      value,
      groupValue,
      fractionValue,
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

    const css: CSSUIObject = {
      display: "block",
      lineHeight: "0",
      ...styles.item,
      ...customColor,
    }

    return (
      <>
        <ui.input {...getInputProps(computedInputProps, ref)} />

        <ui.label
          className={cx("ui-rating__item", className)}
          __css={css}
          {...getItemProps({ ...computedItemProps, ...rest })}
        >
          <RatingIcon
            clipPath={
              fractionValue !== 1
                ? `inset(0 ${isActive ? 100 - fractionValue * 100 : 100}% 0 0)`
                : undefined
            }
          >
            {isFilled
              ? runIfFunc(filledIcon, groupValue)
              : runIfFunc(emptyIcon, groupValue)}
          </RatingIcon>
        </ui.label>
      </>
    )
  },
)

type RatingIconProps = HTMLUIProps<"div">

const RatingIcon: FC<RatingIconProps> = ({ className, children, ...rest }) => {
  const { styles } = useRatingContext()

  const validChildren = getValidChildren(children)

  const cloneChildren = validChildren.map((child) =>
    cloneElement(child, {
      focusable: false,
      "aria-hidden": true,
      style: {
        maxWidth: "1em",
        maxHeight: "1em",
      },
    }),
  )

  const css: CSSUIObject = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...styles.icon,
  }

  return (
    <ui.div
      className={cx("ui-rating__item-icon", className)}
      __css={css}
      {...rest}
    >
      {cloneChildren}
    </ui.div>
  )
}

type StarIconProps = IconProps

const StarIcon: FC<StarIconProps> = ({ ...rest }) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
    </Icon>
  )
}
