"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FireExtinguisher as OriginalFireExtinguisherIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FireExtinguisherIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FireExtinguisherIcon = component(Icon)({
  as: OriginalFireExtinguisherIcon,
}) as Component<"svg", IconProps>
