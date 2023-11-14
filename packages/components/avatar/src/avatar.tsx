import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import { ImageProps, useImage, UseImageProps } from "@yamada-ui/image"
import { createContext, cx, dataAttr, handlerAll } from "@yamada-ui/utils"
import {
  cloneElement,
  FC,
  HTMLAttributeReferrerPolicy,
  ReactElement,
  useState,
} from "react"
import { AvatarIcon } from "./avatar-icon"
import { AvatarName } from "./avatar-name"

type AvatarContext = Record<string, CSSUIObject>

export const [AvatarProvider, useAvatarContext] = createContext<AvatarContext>({
  strict: false,
  name: "AvatarContext",
})

type AvatarOptions = {
  /**
   * The name of the person in the avatar.
   *
   * - If `src` has loaded, the name will be used as the `alt` attribute of the `img`
   * - If `src` is not loaded, the name will be used to create the initials
   */
  name?: string
  /**
   * The image url of the avatar.
   */
  src?: ImageProps["src"]
  /**
   * List of sources to use for different screen resolutions.
   */
  srcSet?: ImageProps["srcSet"]
  /**
   * Defines loading strategy.
   */
  loading?: ImageProps["loading"]
  /**
   * If `true`, opt out of the avatar's `fallback` logic and renders the `img` at all times.
   *
   * @default false
   */
  ignoreFallback?: ImageProps["ignoreFallback"]
  /**
   * The avatar icon to use.
   */
  icon?: ReactElement
  /**
   * Function to get the initials to display.
   */
  format?: (name: string) => string
  /**
   * Defining which referrer is sent when fetching the resource.
   */
  referrerPolicy?: HTMLAttributeReferrerPolicy
}

export type AvatarProps = HTMLUIProps<"span"> &
  ThemeProps<"Avatar"> &
  AvatarOptions &
  Pick<UseImageProps, "onLoad" | "onError">

export const Avatar = forwardRef<AvatarProps, "span">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Avatar", props)
  const {
    className,
    src,
    srcSet,
    name,
    loading,
    icon,
    ignoreFallback,
    borderRadius = "full",
    rounded = "full",
    onError,
    onLoad,
    format,
    children,
    ...rest
  } = omitThemeProps(mergedProps)

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const css: CSSUIObject = {
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "medium",
    ...styles.container,
  }

  return (
    <AvatarProvider value={styles}>
      <ui.span
        ref={ref}
        className={cx("ui-avatar", className)}
        data-loaded={dataAttr(isLoaded)}
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
          onLoad={handlerAll(onLoad, () => setIsLoaded(true))}
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
  Pick<AvatarProps, "name" | "format" | "icon" | "ignoreFallback">

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
  crossOrigin,
  referrerPolicy,
}) => {
  const status = useImage({ src, onLoad, onError, crossOrigin, ignoreFallback })

  const isLoaded = status === "loaded"

  const isFallback = !src || !isLoaded

  if (isFallback)
    return name ? (
      <AvatarName name={name} format={format} />
    ) : (
      cloneElement(icon, { role: "img" })
    )

  const css: CSSUIObject = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }

  return (
    <ui.img
      className="ui-avatar__image"
      src={src}
      srcSet={srcSet}
      alt={name}
      loading={loading}
      referrerPolicy={referrerPolicy}
      borderRadius={borderRadius}
      rounded={rounded}
      __css={css}
    />
  )
}
