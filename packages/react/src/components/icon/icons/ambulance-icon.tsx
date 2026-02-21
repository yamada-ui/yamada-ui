"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ambulance as OriginalAmbulanceIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AmbulanceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AmbulanceIcon = component(Icon)({
  as: OriginalAmbulanceIcon,
}) as Component<"svg", IconProps>
