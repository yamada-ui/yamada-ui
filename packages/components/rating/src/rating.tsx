import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { UseRatingProps } from "./use-rating"
import { RatingProvider, useRating } from "./use-rating"

export type RatingProps = ThemeProps<"Rating"> & UseRatingProps

/**
 * `Rating` is a component used to allow users to provide ratings.
 *
 * @see Docs https://yamada-ui.com/components/forms/rating
 */
export const Rating = forwardRef<RatingProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Rating", props)
  const { className, ...computedProps } = omitThemeProps(mergedProps)

  const { getContainerProps, children, ...rest } = useRating(computedProps)

  const css: CSSUIObject = { display: "flex", ...styles.container }

  return (
    <RatingProvider value={{ styles, ...rest }}>
      <ui.div
        className={cx("ui-rating", className)}
        __css={css}
        {...getContainerProps({}, ref)}
      >
        {children}
      </ui.div>
    </RatingProvider>
  )
})
