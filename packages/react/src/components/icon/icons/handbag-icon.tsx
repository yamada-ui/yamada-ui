"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Handbag as OriginalHandbagIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandbagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandbagIcon = component(Icon)({
  as: OriginalHandbagIcon,
}) as Component<"svg", IconProps>
