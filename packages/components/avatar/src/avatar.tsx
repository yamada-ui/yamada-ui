import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from '@yamada-ui/core'
import { ImageProps, useImage } from '@yamada-ui/image'
import { createContext, cx, dataAttr, handlerAll } from '@yamada-ui/utils'
import { cloneElement, FC, HTMLAttributeReferrerPolicy, ReactElement, useState } from 'react'
import { AvatarIcon } from './avatar-icon'
import { AvatarName } from './avatar-name'

type AvatarContext = Record<string, CSSUIObject>

export const [AvatarProvider, useAvatarContext] = createContext<AvatarContext>({
  strict: false,
  name: 'AvatarContext',
})

type AvatarOptions = {
  name?: string
  src?: ImageProps['src']
  srcSet?: ImageProps['srcSet']
  loading?: ImageProps['loading']
  ignoreFallback?: ImageProps['ignoreFallback']
  icon?: ReactElement
  onError?: () => void
  format?: (name: string) => string
  referrerPolicy?: HTMLAttributeReferrerPolicy
}

export type AvatarProps = HTMLUIProps<'span'> & ThemeProps<'Avatar'> & AvatarOptions

export const Avatar = forwardRef<AvatarProps, 'span'>((props, ref) => {
  const styles = useMultiComponentStyle('Avatar', props)
  const {
    className,
    src,
    srcSet,
    name,
    loading,
    icon,
    ignoreFallback,
    borderRadius = 'full',
    rounded = 'full',
    onError,
    onLoad,
    format,
    children,
    ...rest
  } = omitThemeProps(props)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const css: CSSUIObject = {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'medium',
    ...styles.container,
  }

  return (
    <AvatarProvider value={styles}>
      <ui.span
        ref={ref}
        className={cx('ui-avatar', className)}
        data-loading={dataAttr(isLoading)}
        borderRadius={borderRadius}
        rounded={rounded}
        __css={css}
        {...rest}
      >
        <AvatarImage
          src={src}
          srcSet={srcSet}
          loading={loading}
          borderRadius={borderRadius}
          rounded={rounded}
          onLoad={handlerAll(onLoad, () => setIsLoading(false))}
          onError={onError}
          format={format}
          name={name}
          icon={icon}
          ignoreFallback={ignoreFallback}
        />
        {children}
      </ui.span>
    </AvatarProvider>
  )
})

type AvatarImageProps = ImageProps &
  Pick<AvatarProps, 'name' | 'format' | 'icon' | 'ignoreFallback'>

const AvatarImage: FC<AvatarImageProps> = ({
  src,
  srcSet,
  onError,
  onLoad,
  format,
  borderRadius,
  rounded,
  name,
  loading,
  icon = <AvatarIcon />,
  ignoreFallback,
  referrerPolicy,
}) => {
  const status = useImage({ src, onError, ignoreFallback })

  const isLoaded = status === 'loaded'

  const isFallback = !src || !isLoaded

  if (isFallback)
    return name ? <AvatarName name={name} format={format} /> : cloneElement(icon, { role: 'img' })

  const css: CSSUIObject = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }

  return (
    <ui.img
      className='ui-avatar-image'
      src={src}
      srcSet={srcSet}
      alt={name}
      loading={loading}
      onLoad={onLoad}
      referrerPolicy={referrerPolicy}
      borderRadius={borderRadius}
      rounded={rounded}
      __css={css}
    />
  )
}
