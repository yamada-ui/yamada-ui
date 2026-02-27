"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Slash as OriginalSlashIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SlashIcon = component(Icon)({
  as: OriginalSlashIcon,
}) as Component<"svg", IconProps>
