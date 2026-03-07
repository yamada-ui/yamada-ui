"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Utensils as OriginalUtensilsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UtensilsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UtensilsIcon = component(Icon)({
  as: OriginalUtensilsIcon,
}) as Component<"svg", IconProps>
