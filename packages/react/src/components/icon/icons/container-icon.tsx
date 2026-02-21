"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Container as OriginalContainerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ContainerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ContainerIcon = component(Icon)({
  as: OriginalContainerIcon,
}) as Component<"svg", IconProps>
