"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HatGlasses as OriginalHatGlassesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HatGlassesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HatGlassesIcon = component(Icon)({
  as: OriginalHatGlassesIcon,
}) as Component<"svg", IconProps>
