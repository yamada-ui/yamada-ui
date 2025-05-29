import type { ReactElement } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { AvatarStyle } from "./avatar.style"
import type { UseAvatarProps } from "./use-avatar"
import { createSlotComponent, styled } from "../../core"
import { UserRoundIcon } from "../icon"
import { avatarStyle } from "./avatar.style"
import { useAvatar } from "./use-avatar"

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
 * @see https://yamada-ui.com/components/avatar
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
