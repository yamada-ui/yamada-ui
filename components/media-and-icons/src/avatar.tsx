import {
  ui,
  forwardRef,
  HTMLUIProps,
  CSSUIProps,
  useMultiComponentStyle,
  omitThemeProps,
  ThemeProps,
  CSSUIObject,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'

export type AvatarOptions = {
  name?: string
  showBorder?: boolean
  children?: React.ReactNode
  src?: string
  srcSet?: string
  loading?: 'eager' | 'lazy'
  borderColor?: CSSUIProps['borderColor']
  onError?: () => void
  icon?: React.ReactElement
  getInitials?: (name: string) => string
  referrerPolicy?: React.HTMLAttributeReferrerPolicy
}

export type AvatarProps = HTMLUIProps<'span'> & ThemeProps<'Avatar'> & AvatarOptions

export const Avatar = forwardRef<AvatarProps, 'span'>((props, ref) => {
  const styles = useMultiComponentStyle('Avatar', props)
  const { name, src, ...rest } = omitThemeProps(props)

  return (
    <ui.span ref={ref} __css={{ ...styles.container }} className='ui-avatar' {...rest}>
      <ui.img src={src} className='ui-avatar-icon' __css={{ ...styles.icon }} alt={name} />
    </ui.span>
  )
})
