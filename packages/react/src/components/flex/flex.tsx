import type { CSSUIObject, CSSUIProps, FC, HTMLUIProps } from "../../core"
import { ui } from "../../core"

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
export const Flex: FC<FlexProps> = ({
  align: alignItems,
  basis: flexBasis,
  direction: flexDirection,
  grow: flexGrow,
  justify: justifyContent,
  shrink: flexShrink,
  wrap: flexWrap,
  ...rest
}) => {
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

  return <ui.div __css={css} {...rest} />
}

Flex.__ui__ = "Flex"
