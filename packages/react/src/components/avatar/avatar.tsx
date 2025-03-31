import type { ReactElement } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { AvatarStyle } from "./avatar.style"
import type { UseAvatarProps } from "./use-avatar"
import type { UseAvatarGroupProps } from "./use-avatar-group"
import { useMemo } from "react"
import { createSlotComponent, styled } from "../../core"
import { UserRoundIcon } from "../icon"
import { avatarStyle } from "./avatar.style"
import { useAvatar } from "./use-avatar"
import { useAvatarGroup } from "./use-avatar-group"

export interface AvatarProps
  extends HTMLStyledProps,
    ThemeProps<AvatarStyle>,
    UseAvatarProps {
  /**
   * The avatar icon to use.
   */
  icon?: ReactElement
}

export const {
  component,
  PropsContext: AvatarPropsContext,
  usePropsContext: useAvatarPropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<AvatarProps, AvatarStyle>("avatar", avatarStyle)

/**
 * `Avatar` is a component that displays a profile picture or an icon with initials representing a user.
 *
 * @see Docs https://yamada-ui.com/components/avatar
 */
export const Avatar = withProvider<"div", AvatarProps>((props) => {
  const { getFallbackProps, getImageProps, getRootProps } = useAvatar(props)

  return (
    <styled.div {...getRootProps()}>
      <AvatarFallback {...getFallbackProps()} />
      <AvatarImage {...getImageProps()} />
    </styled.div>
  )
}, "root")({ icon: <UserRoundIcon fontSize="1.2em" /> })

interface AvatarImageProps extends HTMLStyledProps<"img"> {}

const AvatarImage = withContext<"img", AvatarImageProps>("img", "image")()

interface AvatarFallbackProps extends HTMLStyledProps {}

const AvatarFallback = withContext<"div", AvatarFallbackProps>(
  "div",
  "fallback",
)()

export interface AvatarGroupProps
  extends HTMLStyledProps,
    ThemeProps<AvatarStyle>,
    UseAvatarGroupProps {}

export const AvatarGroup = component<"div", AvatarGroupProps>((props) => {
  const [, { colorScheme, size, variant, shape, ...rest }] =
    useRootComponentProps(props, "group", {
      transferProps: ["variant", "colorScheme", "size", "shape"],
    })
  const { children, excess, getRootProps } = useAvatarGroup(rest)
  const context = useMemo(
    () => ({ colorScheme, size, variant, shape }),
    [variant, size, colorScheme, shape],
  )

  return (
    <AvatarPropsContext value={context}>
      <styled.div {...getRootProps()}>
        {excess > 0 ? <Avatar fallback={`+${excess}`} /> : null}
        {children}
      </styled.div>
    </AvatarPropsContext>
  )
}, "group")()
