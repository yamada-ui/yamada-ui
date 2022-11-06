import {
  ui,
  forwardRef,
  HTMLUIProps,
  CSSUIProps,
  useMultiComponentStyle,
  omitThemeProps,
  ThemeProps,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { SyntheticEvent, useState } from 'react'

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

export type AvatarProps = HTMLUIProps<'span'> &
  ThemeProps<'Avatar'> &
  AvatarOptions & {
    iconLabel?: string
    /**
     * If `true`, opt out of the avatar's `fallback` logic and
     * renders the `img` at all times.
     */
    ignoreFallback?: boolean
  }

export const Avatar = forwardRef<AvatarProps, 'span'>((props, ref) => {
  const styles = useMultiComponentStyle('Avatar', props)
  const { name, src, onError, ignoreFallback, ...rest } = omitThemeProps(props)

  const [error, setError] = useState(false)

  const onErrorHandle = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    setError(true)
  }

  const getInitials = (name: string) => {
    const [firstName, lastName] = name?.split(' ') || ''
    return `${firstName.charAt(0)} ${lastName.charAt(0)}`
  }

  return (
    <ui.span ref={ref} __css={{ ...styles.container }} className='ui-avatar' {...rest}>
      {!error ? (
        <ui.img
          src={src}
          className='ui-avatar-icon'
          __css={{ ...styles.icon }}
          alt={name}
          onError={onErrorHandle}
        />
      ) : (
        <ui.div
          className='ui-avatar-icon'
          __css={{
            color: 'black',
            textAlign: 'center',
            justifyContent: 'center',
            lineHeight: '3rem',
          }}
        >
          {getInitials(name || '')}
        </ui.div>
      )}
    </ui.span>
  )
})
