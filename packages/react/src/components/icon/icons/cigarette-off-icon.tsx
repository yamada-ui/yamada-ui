"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CigaretteOff as OriginalCigaretteOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CigaretteOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CigaretteOffIcon = component(Icon)({
  as: OriginalCigaretteOffIcon,
}) as Component<"svg", IconProps>
