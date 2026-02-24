"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Clapperboard as OriginalClapperboardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClapperboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClapperboardIcon = component(Icon)({
  as: OriginalClapperboardIcon,
}) as Component<"svg", IconProps>
