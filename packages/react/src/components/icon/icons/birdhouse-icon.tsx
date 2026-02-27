"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Birdhouse as OriginalBirdhouseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BirdhouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BirdhouseIcon = component(Icon)({
  as: OriginalBirdhouseIcon,
}) as Component<"svg", IconProps>
