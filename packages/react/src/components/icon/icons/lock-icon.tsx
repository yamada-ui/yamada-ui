"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lock as OriginalLockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LockIcon = component(Icon)({ as: OriginalLockIcon }) as Component<
  "svg",
  IconProps
>
