import type {
  HTMLAttributeReferrerPolicy,
  ReactElement,
  ReactNode,
} from "react"
import type { HTMLProps, HTMLStyledProps, PropGetter } from "../../core"
import { useCallback, useState } from "react"
import { useI18n } from "../../providers/i18n-provider"
import { dataAttr, handlerAll } from "../../utils"

const defaultFormat = (name: string) => {
  const names = name.trim().split(" ")
  const firstName = names[0] ?? ""
  const lastName = names.length > 1 ? names[names.length - 1] : ""

  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

export interface UseAvatarProps extends HTMLProps {
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
  src?: HTMLStyledProps<"img">["src"]
  /**
   * List of sources to use for different screen resolutions.
   */
  srcSet?: HTMLStyledProps<"img">["srcSet"]
  /**
   * The `HTMLImageElement` property `alt`.
   */
  alt?: HTMLStyledProps<"img">["alt"]
  /**
   * The `HTMLImageElement` property `crossOrigin`.
   */
  crossOrigin?: HTMLStyledProps<"img">["crossOrigin"]
  /**
   * The fallback text to display if the image is not provided.
   */
  fallback?: ReactNode
  /**
   * Function to get the initials to display.
   */
  format?: (name: string) => string
  /**
   * The avatar icon to use.
   */
  icon?: ReactElement
  /**
   * Defines loading strategy.
   */
  loading?: HTMLStyledProps<"img">["loading"]
  /**
   * Defining which referrer is sent when fetching the resource.
   *
   * @default 'no-referrer'
   */
  referrerPolicy?: HTMLAttributeReferrerPolicy
}

export const useAvatar = ({
  name,
  src,
  srcSet,
  alt,
  crossOrigin,
  fallback: fallbackMessage,
  format = defaultFormat,
  icon,
  loading,
  referrerPolicy = "no-referrer",
  ...rest
}: UseAvatarProps = {}) => {
  const initials = name ? format(name) : undefined
  const [loaded, setLoaded] = useState<boolean>(false)
  const fallback = !src || !loaded
  const { t } = useI18n("avatar")

  const getGroupProps: PropGetter = useCallback((props) => ({ ...props }), [])

  const getRootProps: PropGetter = useCallback(
    (props) => ({
      ...rest,
      ...props,
      "data-fallback": dataAttr(!!fallbackMessage),
      "data-loaded": dataAttr(loaded),
    }),
    [loaded, fallbackMessage, rest],
  )

  const getImageProps: PropGetter<"img"> = useCallback(
    ({ onLoad, ...props } = {}) => ({
      ...props,
      src,
      srcSet,
      alt: name || alt,
      crossOrigin,
      draggable: false,
      hidden: fallback,
      loading,
      referrerPolicy,
      onLoad: handlerAll(onLoad, () => setLoaded(true)),
    }),
    [src, srcSet, alt, crossOrigin, loading, referrerPolicy, fallback, name],
  )

  const getFallbackProps: PropGetter = useCallback(
    (props) => ({
      ...props,
      "aria-label": !fallbackMessage
        ? name || alt || t("Avatar Icon")
        : undefined,
      children: fallbackMessage || initials || icon,
      hidden: !fallback,
      role: "img",
    }),
    [name, initials, fallback, icon, fallbackMessage, alt, t],
  )

  return {
    name,
    loaded,
    getFallbackProps,
    getGroupProps,
    getImageProps,
    getRootProps,
  }
}

export type UseAvatarReturn = ReturnType<typeof useAvatar>
