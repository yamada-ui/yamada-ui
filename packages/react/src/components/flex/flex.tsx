import type { CSSProps, HTMLUIProps, ThemeProps } from "../../core"
import type { FlexStyle } from "./flex.style"
import { createComponent } from "../../core"
import { flexStyle } from "./flex.style"

interface FlexOptions {
  /**
   * The CSS `align-items` property.
   */
  align?: CSSProps["alignItems"]
  /**
   * The CSS `flex-basis` property.
   */
  basis?: CSSProps["flexBasis"]
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSProps["flexDirection"]
  /**
   * The CSS `flex-grow` property.
   */
  grow?: CSSProps["flexGrow"]
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSProps["justifyContent"]
  /**
   * The CSS `flex-shrink` property.
   */
  shrink?: CSSProps["flexShrink"]
  /**
   * The CSS `flex-wrap` property.
   */
  wrap?: CSSProps["flexWrap"]
}

export interface FlexProps
  extends Omit<HTMLUIProps, "direction">,
    ThemeProps<FlexStyle>,
    FlexOptions {}

export const {
  PropsContext: FlexPropsContext,
  usePropsContext: useFlexPropsContext,
  withContext,
} = createComponent<FlexProps, FlexStyle>("flex", flexStyle)

/**
 * `Flex` is a component that sets `flex` to `Box`. Also, convenient style shorthand is available.
 *
 * @see Docs https://yamada-ui.com/components/layouts/flex
 */
export const Flex = withContext("div")(
  undefined,
  ({
    align: alignItems,
    basis: flexBasis,
    direction: flexDirection,
    grow: flexGrow,
    justify: justifyContent,
    shrink: flexShrink,
    wrap: flexWrap,
    ...rest
  }) => ({
    alignItems,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    ...rest,
  }),
)
