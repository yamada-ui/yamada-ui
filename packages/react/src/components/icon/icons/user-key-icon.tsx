"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserKey as OriginalUserKeyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserKeyIcon = component(Icon)({
  as: OriginalUserKeyIcon,
}) as Component<"svg", IconProps>
