"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Popsicle as OriginalPopsicleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PopsicleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PopsicleIcon = component(Icon)({
  as: OriginalPopsicleIcon,
}) as Component<"svg", IconProps>
