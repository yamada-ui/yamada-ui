import { Icon, IconProps, FontAwesomeIconProps, FontAwesomeIcon } from '@yamada-ui/media-and-icons'
import {
  ui,
  forwardRef,
  HTMLUIProps,
  CSSUIProps,
  ThemeProps,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
} from '@yamada-ui/system'
import { createContext, cx, getValidChildren } from '@yamada-ui/utils'

const [ListProvider, useList] = createContext<Record<string, CSSUIObject>>({
  name: `ListContext`,
  errorMessage: `useList returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
})

export { useList }

type ListOptions = {
  styleType?: CSSUIProps['listStyleType']
  stylePosition?: CSSUIProps['listStylePosition']
  gap?: CSSUIProps['gap']
}

export type ListProps = HTMLUIProps<'ul'> & ThemeProps<'List'> & ListOptions

export const List = forwardRef<ListProps, 'ul'>((props, ref) => {
  const styles = useMultiComponentStyle('List', props)
  const {
    className,
    children,
    styleType: listStyleType = 'none',
    stylePosition: listStylePosition,
    gap = 'sm',
    ...rest
  } = omitThemeProps(props)

  const validChildren = getValidChildren(children)

  const css: CSSUIObject = {
    display: 'flex',
    flexDirection: 'column',
    gap,
    ms: listStyleType !== 'none' ? '1.4em' : undefined,
    '& > li': { ps: listStyleType === 'decimal' ? '0.3em' : undefined },
    ...styles.container,
  }

  return (
    <ListProvider value={styles}>
      <ui.ul
        ref={ref}
        listStyleType={listStyleType}
        listStylePosition={listStylePosition}
        role='list'
        className={cx('ui-list', className)}
        __css={css}
        {...rest}
      >
        {validChildren}
      </ui.ul>
    </ListProvider>
  )
})

export const DiscList = forwardRef<ListProps, 'ol'>(({ as, ...rest }, ref) => {
  return <List ref={ref} as='ul' styleType='disc' {...rest} />
})

export const DecimalList = forwardRef<ListProps, 'ol'>(({ as, ...rest }, ref) => {
  return <List ref={ref} as='ol' styleType='decimal' ms='1.2em' {...rest} />
})

export type ListItemProps = HTMLUIProps<'li'>

export const ListItem = forwardRef<ListItemProps, 'li'>(({ className, ...rest }, ref) => {
  const styles = useList()

  const css = { ...styles.item }

  return <ui.li ref={ref} className={cx('ui-list-item', className)} __css={css} {...rest} />
})

export type ListIconProps = IconProps & Partial<Pick<FontAwesomeIconProps, 'icon'>>

export const ListIcon = forwardRef<ListIconProps, 'svg'>(({ className, icon, ...rest }, ref) => {
  const styles = useList()

  const css = { ...styles.icon }

  if (icon) {
    return <FontAwesomeIcon role='presentation' icon={icon} __css={css} {...rest} />
  } else {
    return <Icon ref={ref} role='presentation' __css={css} {...rest} />
  }
})
