"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cigarette as OriginalCigaretteIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CigaretteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CigaretteIcon = component(Icon)({
  as: OriginalCigaretteIcon,
}) as Component<"svg", IconProps>
