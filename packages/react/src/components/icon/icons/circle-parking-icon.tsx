"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleParking as OriginalCircleParkingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleParkingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleParkingIcon = component(Icon)({
  as: OriginalCircleParkingIcon,
}) as Component<"svg", IconProps>
