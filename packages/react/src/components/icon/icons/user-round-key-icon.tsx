"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserRoundKey as OriginalUserRoundKeyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserRoundKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserRoundKeyIcon = component(Icon)({
  as: OriginalUserRoundKeyIcon,
}) as Component<"svg", IconProps>
