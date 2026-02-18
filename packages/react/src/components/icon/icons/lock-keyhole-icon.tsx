"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LockKeyhole as OriginalLockKeyholeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LockKeyholeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LockKeyholeIcon = component(Icon)({
  as: OriginalLockKeyholeIcon,
}) as Component<"svg", IconProps>
