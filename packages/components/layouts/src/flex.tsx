import { ui, forwardRef, HTMLUIProps, CSSUIProps, CSSUIObject } from '@yamada-ui/core'

type FlexOptions = {
  /**
   * The CSS `flex-direction` property.
   */
  direction?: CSSUIProps['flexDirection']
  /**
   * The CSS `justify-content` property.
   */
  justify?: CSSUIProps['justifyContent']
  /**
   * The CSS `align-items` property.
   */
  align?: CSSUIProps['alignItems']
  /**
   * The CSS `flex-wrap` property.
   */
  wrap?: CSSUIProps['flexWrap']
  /**
   * The CSS `flex-basis` property.
   */
  basis?: CSSUIProps['flexBasis']
  /**
   * The CSS `flex-grow` property.
   */
  grow?: CSSUIProps['flexGrow']
  /**
   * The CSS `flex-shrink` property.
   */
  shrink?: CSSUIProps['flexShrink']
}

export type FlexProps = HTMLUIProps<'div'> & FlexOptions

export const Flex = forwardRef<FlexProps, 'div'>(
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
      display: 'flex',
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

export const Wrap = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Flex ref={ref} wrap='wrap' {...props} />
))
