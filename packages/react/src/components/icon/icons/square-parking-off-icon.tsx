"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareParkingOff as OriginalSquareParkingOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareParkingOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareParkingOffIcon = component(Icon)({
  as: OriginalSquareParkingOffIcon,
}) as Component<"svg", IconProps>
