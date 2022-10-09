import { ui, forwordRef } from '../../system'
import { HTMLUIProps, CSSUIProps } from '../../types'

type FlexOptions = {
  direction?: CSSUIProps['flexDirection']
  justify?: CSSUIProps['justifyContent']
  align?: CSSUIProps['alignItems']
  wrap?: CSSUIProps['flexWrap']
  basis?: CSSUIProps['flexBasis']
  grow?: CSSUIProps['flexGrow']
  shrink?: CSSUIProps['flexShrink']
}

export type FlexProps = HTMLUIProps<'div'> & FlexOptions

export const Flex = forwordRef<FlexProps, 'div'>(
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
    const css = {
      display: 'flex',
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      flexBasis,
      flexGrow,
      flexShrink,
    }

    // @ts-ignore
    return <ui.div ref={ref} __css={css} {...rest} />
  },
)
