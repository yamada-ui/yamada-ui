"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Origami as OriginalOrigamiIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OrigamiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OrigamiIcon = component(Icon)({
  as: OriginalOrigamiIcon,
}) as Component<"svg", IconProps>
