"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LockOpen as OriginalLockOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LockOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LockOpenIcon = component(Icon)({
  as: OriginalLockOpenIcon,
}) as Component<"svg", IconProps>
