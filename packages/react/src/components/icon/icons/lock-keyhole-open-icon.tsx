"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LockKeyholeOpen as OriginalLockKeyholeOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LockKeyholeOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LockKeyholeOpenIcon = component(Icon)({
  as: OriginalLockKeyholeOpenIcon,
}) as Component<"svg", IconProps>
