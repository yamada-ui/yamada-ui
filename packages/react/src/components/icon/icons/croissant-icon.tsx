"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Croissant as OriginalCroissantIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CroissantIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CroissantIcon = component(Icon)({
  as: OriginalCroissantIcon,
}) as Component<"svg", IconProps>
