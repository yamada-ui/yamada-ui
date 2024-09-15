import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"

type AiryOptions = {}

export type AiryProps = HTMLUIProps<"div"> & ThemeProps<"Airy"> & AiryOptions

/**
 * `Airy` is component.
 *
 * @see Docs https://yamada-ui.com/components/transitions/airy
 */
export const Airy = forwardRef<AiryProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Airy", props)
  const { className, ...rest } = omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-airy", className)}
      __css={css}
      {...rest}
    />
  )
})
