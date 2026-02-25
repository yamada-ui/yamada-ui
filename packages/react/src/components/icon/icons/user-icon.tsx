"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { User as OriginalUserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UserIcon = component(Icon)({ as: OriginalUserIcon }) as Component<
  "svg",
  IconProps
>
