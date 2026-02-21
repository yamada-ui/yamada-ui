"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UserLock as OriginalUserLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserLockIcon = component(Icon)({
  as: OriginalUserLockIcon,
}) as Component<"svg", IconProps>
