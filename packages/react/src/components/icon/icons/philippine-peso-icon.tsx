"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PhilippinePeso as OriginalPhilippinePesoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhilippinePesoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhilippinePesoIcon = component(Icon)({
  as: OriginalPhilippinePesoIcon,
}) as Component<"svg", IconProps>
