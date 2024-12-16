import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
import type { UseRatingProps } from "./use-rating"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { RatingProvider } from "./rating-context"
import { useRating } from "./use-rating"

export interface RatingProps extends ThemeProps<"Rating">, UseRatingProps {}

/**
 * `Rating` is a component used to allow users to provide ratings.
 *
 * @see Docs https://yamada-ui.com/components/forms/rating
 */
export const Rating = forwardRef<RatingProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Rating", props)
  const { className, ...computedProps } = omitThemeProps(mergedProps)
  const { children, getContainerProps, ...rest } = useRating(computedProps)
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

Rating.displayName = "Rating"
Rating.__ui__ = "Rating"
