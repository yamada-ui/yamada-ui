"use client"

import type { ReactElement } from "react"
import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { AvatarStyle } from "./avatar.style"
import type { UseAvatarProps } from "./use-avatar"
import { createSlotComponent, styled } from "../../core"
import { UserRoundIcon } from "../icon"
import { avatarStyle } from "./avatar.style"
import { useAvatar } from "./use-avatar"

export interface AvatarProps
  extends HTMLStyledProps, ThemeProps<AvatarStyle>, UseAvatarProps {
  /**
   * The avatar icon to use.
   */
  icon?: ReactElement
  /**
   * The props to pass to the fallback component.
   */
  fallbackProps?: AvatarFallbackProps
  /**
   * The props to pass to the image component.
   */
  imageProps?: AvatarImageProps
}

const {
  component,
  PropsContext: AvatarPropsContext,
  usePropsContext: useAvatarPropsContext,
  withContext,
  withProvider,
  useRootComponentProps,
} = createSlotComponent<AvatarProps, AvatarStyle>("avatar", avatarStyle)

export {
  AvatarPropsContext,
  component,
  useAvatarPropsContext,
  useRootComponentProps,
}

/**
 * `Avatar` is a component that displays a profile picture or an icon with initials representing a user.
 *
 * @see https://yamada-ui.com/docs/components/avatar
 */
export const Avatar = withProvider<"div", AvatarProps>(
  ({ fallbackProps, imageProps, ...rest }) => {
    const { getFallbackProps, getImageProps, getRootProps } = useAvatar(rest)

    return (
      <styled.div {...getRootProps()}>
        <AvatarFallback {...getFallbackProps(fallbackProps)} />
        <AvatarImage {...getImageProps(imageProps)} />
      </styled.div>
    )
  },
  "root",
)(({ icon, ...rest }) => ({
  icon: icon ?? <UserRoundIcon fontSize="1.2em" />,
  ...rest,
}))

interface AvatarImageProps extends HTMLStyledProps<"img"> {}

const AvatarImage = withContext<"img", AvatarImageProps>("img", "image")()

interface AvatarFallbackProps extends HTMLStyledProps {}

const AvatarFallback = withContext<"div", AvatarFallbackProps>(
  "div",
  "fallback",
)()
