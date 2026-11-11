"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ServerPlus as OriginalServerPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ServerPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ServerPlusIcon = component(Icon)({
  as: OriginalServerPlusIcon,
}) as Component<"svg", IconProps>
