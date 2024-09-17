import type { HTMLUIProps, CSSUIObject, CSSUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"

interface FlexOptions {
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIProps["flexDirection"]
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIProps["justifyContent"]
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIProps["alignItems"]
  /**
   * The CSS `flex-wrap` property.
   */
  wrap?: CSSUIProps["flexWrap"]
  /**
   * The CSS `flex-basis` property.
   */
  basis?: CSSUIProps["flexBasis"]
  /**
   * The CSS `flex-grow` property.
   */
  grow?: CSSUIProps["flexGrow"]
  /**
   * The CSS `flex-shrink` property.
   */
  shrink?: CSSUIProps["flexShrink"]
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
      direction: flexDirection,
      justify: justifyContent,
      align: alignItems,
      wrap: flexWrap,
      basis: flexBasis,
      grow: flexGrow,
      shrink: flexShrink,
      ...rest
    },
    ref,
  ) => {
    const css: CSSUIObject = {
      display: "flex",
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      flexBasis,
      flexGrow,
      flexShrink,
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
