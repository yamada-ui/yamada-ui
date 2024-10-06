import type { CSSUIObject, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"

interface FlexOptions {
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIProps["alignItems"]
  /**
   * The CSS `flex-basis` property.
   */
  basis?: CSSUIProps["flexBasis"]
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIProps["flexDirection"]
  /**
   * The CSS `flex-grow` property.
   */
  grow?: CSSUIProps["flexGrow"]
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIProps["justifyContent"]
  /**
   * The CSS `flex-shrink` property.
   */
  shrink?: CSSUIProps["flexShrink"]
  /**
   * The CSS `flex-wrap` property.
   */
  wrap?: CSSUIProps["flexWrap"]
}

export interface FlexProps
  extends Omit<HTMLUIProps, "direction">,
    FlexOptions {}

/**
 * `Flex` is a component that sets `flex` to `Box`. Also, convenient style shorthand is available.
 *
 * @see Docs https://yamada-ui.com/components/layouts/flex
 */
export const Flex = forwardRef<FlexProps, "div">(
  (
    {
      align: alignItems,
      basis: flexBasis,
      direction: flexDirection,
      grow: flexGrow,
      justify: justifyContent,
      shrink: flexShrink,
      wrap: flexWrap,
      ...rest
    },
    ref,
  ) => {
    const css: CSSUIObject = {
      alignItems,
      display: "flex",
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      justifyContent,
    }

    return <ui.div ref={ref} __css={css} {...rest} />
  },
)

/**
 * `Wrap` is a component that has `wrap` set on `Flex`. It inherits convenient style shorthand from `Flex`.
 *
 * @see Docs https://yamada-ui.com/components/layouts/wrap
 */
export const Wrap = forwardRef<FlexProps, "div">((props, ref) => (
  <Flex ref={ref} wrap="wrap" {...props} />
))
