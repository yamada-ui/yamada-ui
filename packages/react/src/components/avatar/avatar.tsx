import type { ReactElement } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { AvatarStyle } from "./avatar.style"
import type { UseAvatarProps } from "./use-avatar"
import type { UseAvatarGroupProps } from "./use-avatar-group"
import { useMemo } from "react"
import { createSlotComponent, ui } from "../../core"
import { UserRoundIcon } from "../icon"
import { avatarStyle } from "./avatar.style"
import { useAvatar } from "./use-avatar"
import { useAvatarGroup } from "./use-avatar-group"

export interface AvatarProps
  extends HTMLUIProps,
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
    <ui.div {...getRootProps()}>
      <AvatarFallback {...getFallbackProps()} />
      <AvatarImage {...getImageProps()} />
    </ui.div>
  )
}, "root")({ icon: <UserRoundIcon fontSize="1.2em" /> })

interface AvatarImageProps extends HTMLUIProps<"img"> {}

const AvatarImage = withContext<"img", AvatarImageProps>("img", "image")()

interface AvatarFallbackProps extends HTMLUIProps {}

const AvatarFallback = withContext<"div", AvatarFallbackProps>(
  "div",
  "fallback",
)()

export interface AvatarGroupProps
  extends HTMLUIProps,
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
      <ui.div {...getRootProps()}>
        {excess > 0 ? <Avatar fallback={`+${excess}`} /> : null}
        {children}
      </ui.div>
    </AvatarPropsContext>
  )
}, "group")()
