import { ui, forwardRef } from "@yamada-ui/core"
import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import type { UseRatingItemProps } from "./use-rating"
import { useRatingContext, useRatingItem } from "./use-rating"

export type RatingItemProps = HTMLUIProps<"input"> & UseRatingItemProps

export const RatingItem = forwardRef<RatingItemProps, "input">(
  ({ className, groupValue, value, fractionValue, ...rest }, ref) => {
    const { styles } = useRatingContext()
    const { getInputProps, getItemProps } = useRatingItem({
      value,
      groupValue,
      fractionValue,
    })

    const css: CSSUIObject = { display: "block", ...styles.item }

    return (
      <>
        <ui.input {...getInputProps({}, ref)} />

        <ui.label
          className={cx("ui-rating__item", className)}
          __css={css}
          {...getItemProps(rest)}
        >
          <RatingIcon />
        </ui.label>
      </>
    )
  },
)

export type RatingIconProps = IconProps

export const RatingIcon = forwardRef<RatingIconProps, "svg">(
  ({ className, ...rest }, ref) => {
    const { styles } = useRatingContext()

    const css: CSSUIObject = { ...styles.icon }

    return (
      <Icon
        ref={ref}
        className={cx("ui-rating__item__icon", className)}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        __css={css}
        {...rest}
      >
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
      </Icon>
    )
  },
)
