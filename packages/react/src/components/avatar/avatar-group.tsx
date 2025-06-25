"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { AvatarStyle } from "./avatar.style"
import type { UseAvatarGroupProps } from "./use-avatar-group"
import { useMemo } from "react"
import { styled } from "../../core"
import {
  Avatar,
  AvatarPropsContext,
  component,
  useRootComponentProps,
} from "./avatar"
import { useAvatarGroup } from "./use-avatar-group"

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
