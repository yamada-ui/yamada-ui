import {
  ui,
  HTMLUIProps,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  ThemeProps,
} from '@yamada-ui/core'
import { cx, getValidChildren, isUndefined, filterUndefined } from '@yamada-ui/utils'
import { cloneElement } from 'react'

type AvatarGroupOptions = {
  max?: number
}

export type AvatarGroupProps = HTMLUIProps<'div'> & ThemeProps<'Avatar'> & AvatarGroupOptions

export const AvatarGroup = forwardRef<AvatarGroupProps, 'div'>((props, ref) => {
  const styles = useMultiComponentStyle('Avatar', props)
  const {
    className,
    max,
    borderColor,
    gap = '-sm',
    rounded = 'full',
    children,
    ...rest
  } = omitThemeProps(props)

  let validChildren = getValidChildren(children)

  validChildren = !isUndefined(max) ? validChildren.slice(0, max) : validChildren

  validChildren = validChildren.reverse()

  const excess = !isUndefined(max) ? validChildren.length - max : 0

  const cloneChildren = validChildren.map((child, i) =>
    cloneElement(
      child,
      filterUndefined({
        marginEnd: !i ? 0 : gap,
        size: props.size,
        borderColor: child.props.borderColor ?? borderColor,
        borderWidth: '2px',
      }),
    ),
  )

  return (
    <ui.div
      ref={ref}
      className={cx('ui-avatar-group', className)}
      __css={{
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'center',
        ...styles.group,
      }}
      {...rest}
    >
      {excess > 0 ? (
        <ui.span
          className='ui-avatar-excess'
          rounded={rounded}
          ms={gap}
          __css={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'medium',
            position: 'relative',
            flexShrink: 0,
            ...styles.excess,
          }}
        >
          {`+${excess}`}
        </ui.span>
      ) : null}
      {cloneChildren}
    </ui.div>
  )
})
