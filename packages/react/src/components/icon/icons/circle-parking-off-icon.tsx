"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleParkingOff as OriginalCircleParkingOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleParkingOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleParkingOffIcon = component(Icon)({
  as: OriginalCircleParkingOffIcon,
}) as Component<"svg", IconProps>
