"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Factory as OriginalFactoryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FactoryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FactoryIcon = component(Icon)({
  as: OriginalFactoryIcon,
}) as Component<"svg", IconProps>
