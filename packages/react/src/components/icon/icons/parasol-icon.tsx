"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Parasol as OriginalParasolIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ParasolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ParasolIcon = component(Icon)({
  as: OriginalParasolIcon,
}) as Component<"svg", IconProps>
