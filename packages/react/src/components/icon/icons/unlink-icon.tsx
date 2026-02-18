"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Unlink as OriginalUnlinkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UnlinkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UnlinkIcon = component(Icon)({
  as: OriginalUnlinkIcon,
}) as Component<"svg", IconProps>
