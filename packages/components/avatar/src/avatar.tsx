import type { CSSUIObject, FC, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { ImageProps, UseImageProps } from "@yamada-ui/image"
import type { HTMLAttributeReferrerPolicy, ReactElement } from "react"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { useImage } from "@yamada-ui/image"
import { createContext, cx, dataAttr, handlerAll } from "@yamada-ui/utils"
import { cloneElement, useState } from "react"
import { AvatarIcon } from "./avatar-icon"
import { AvatarName } from "./avatar-name"

interface AvatarContext {
  [key: string]: CSSUIObject
}

export const [AvatarProvider, useAvatarContext] = createContext<AvatarContext>({
  name: "AvatarContext",
  strict: false,
})

interface AvatarOptions {
  /**
   * The name of the person in the avatar.
   *
   * - If `src` has loaded, the name will be used as the `alt` attribute of the `img`
   * - If `src` is not loaded, the name will be used to create the initials
   */
  name?: string
  /**
   * The `HTMLImageElement` property `alt`.
   */
  alt?: HTMLUIProps<"img">["alt"]
  /**
   * Function to get the initials to display.
   */
  format?: (name: string) => string
  /**
   * The avatar icon to use.
   */
  icon?: ReactElement
  /**
   * If `true`, opt out of the avatar's `fallback` logic and renders the `img` at all times.
   *
   * @default false
   */
  ignoreFallback?: ImageProps["ignoreFallback"]
  /**
   * Defines loading strategy.
   */
  loading?: ImageProps["loading"]
  /**
   * Defining which referrer is sent when fetching the resource.
   */
  referrerPolicy?: HTMLAttributeReferrerPolicy
  /**
   * The image url of the avatar.
   */
  src?: ImageProps["src"]
  /**
   * List of sources to use for different screen resolutions.
   */
  srcSet?: ImageProps["srcSet"]
}

export type AvatarProps = AvatarOptions &
  HTMLUIProps<"span"> &
  Pick<UseImageProps, "crossOrigin" | "onError" | "onLoad"> &
  ThemeProps<"Avatar">

/**
 * `Avatar` is a component that displays a profile picture or an icon with initials representing a user.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/avatar
 */
export const Avatar = forwardRef<AvatarProps, "span">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Avatar", props)
  const {
    name,
    className,
    alt,
    borderRadius = "fallback(full, 9999px)",
    children,
    crossOrigin,
    format,
    icon,
    ignoreFallback,
    loading,
    referrerPolicy,
    rounded = "fallback(full, 9999px)",
    src,
    srcSet,
    onError,
    onLoad,
    ...rest
  } = omitThemeProps(mergedProps)

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const css: CSSUIObject = {
    alignItems: "center",
    display: "inline-flex",
    flexShrink: 0,
    fontWeight: "medium",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",
    textTransform: "uppercase",
    ...styles.container,
  }

  return (
    <AvatarProvider value={styles}>
      <ui.span
        ref={ref}
        className={cx("ui-avatar", className)}
        borderRadius={borderRadius}
        rounded={rounded}
        data-loaded={dataAttr(isLoaded)}
        __css={css}
        {...rest}
      >
        <AvatarImage
          name={name}
          alt={alt}
          borderRadius={borderRadius}
          crossOrigin={crossOrigin}
          format={format}
          icon={icon}
          ignoreFallback={ignoreFallback}
          loading={loading}
          referrerPolicy={referrerPolicy}
          rounded={rounded}
          src={src}
          srcSet={srcSet}
          onError={onError}
          onLoad={handlerAll(onLoad, () => setIsLoaded(true))}
        />
        {children}
      </ui.span>
    </AvatarProvider>
  )
})

Avatar.displayName = "Avatar"
Avatar.__ui__ = "Avatar"

type AvatarImageProps = ImageProps &
  Pick<AvatarProps, "format" | "icon" | "ignoreFallback" | "name">

const AvatarImage: FC<AvatarImageProps> = ({
  name,
  alt,
  borderRadius,
  crossOrigin,
  format,
  icon = <AvatarIcon />,
  ignoreFallback,
  loading,
  referrerPolicy,
  rounded,
  src,
  srcSet,
  onError,
  onLoad,
}) => {
  const status = useImage({ crossOrigin, ignoreFallback, src, onError, onLoad })

  const isLoaded = status === "loaded"

  const isFallback = !src || !isLoaded

  if (isFallback)
    return name ? (
      <AvatarName name={name} format={format} />
    ) : (
      cloneElement(icon, { role: "img", "aria-label": alt ?? "Avatar Icon" })
    )

  const css: CSSUIObject = {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  }

  return (
    <ui.img
      className="ui-avatar__image"
      alt={alt ?? name}
      borderRadius={borderRadius}
      loading={loading}
      referrerPolicy={referrerPolicy}
      rounded={rounded}
      src={src}
      srcSet={srcSet}
      __css={css}
    />
  )
}

AvatarImage.displayName = "AvatarImage"
AvatarImage.__ui__ = "AvatarImage"
