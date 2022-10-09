import { cloneElement, Fragment, ReactElement, useMemo } from 'react'
import { ui, forwordRef } from '../../system'
import { HTMLUIProps, CSSUIProps } from '../../types'
import { getValidChildren } from '../../utils'

type StackOptions = {
  direction?: CSSUIProps['flexDirection']
  justify?: CSSUIProps['justifyContent']
  align?: CSSUIProps['alignItems']
  wrap?: CSSUIProps['flexWrap']
  divider?: ReactElement
}

export type StackProps = HTMLUIProps<'div'> & StackOptions

export const VStack = forwordRef<StackProps, 'div'>(
  (
    {
      direction: flexDirection = 'column',
      justify: justifyContent,
      align: alignItems,
      wrap: flexWrap,
      gap = 'md',
      divider,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const dividerCSS = useMemo(() => {
      switch (flexDirection) {
        case 'column':
        case 'column-reverse':
          return {
            borderLeftWidth: '0px',
            borderBottomWidth: '1px',
          }

        default:
          return {
            borderLeftWidth: '1px',
            borderBottomWidth: '0px',
          }
      }
    }, [flexDirection])

    const validChildren = getValidChildren(children)

    const clones = divider
      ? validChildren.map(({ key, ...child }, index) => {
          key = typeof key !== 'undefined' ? key : index

          const clonedDivider = cloneElement(divider as React.ReactElement<any>, {
            __css: dividerCSS,
          })

          return (
            <Fragment key={key}>
              {!!index ? divider : null}
              {child}
            </Fragment>
          )
        })
      : validChildren

    const css = {
      display: 'flex',
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      gap,
    }

    return (
      // @ts-ignore
      <ui.div ref={ref} className={cx('ui-stack', className)} __css={css} {...rest}>
        {clones}
      </ui.div>
    )
  },
)
