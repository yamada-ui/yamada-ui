"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SquareParking as OriginalSquareParkingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SquareParkingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SquareParkingIcon = component(Icon)({
  as: OriginalSquareParkingIcon,
}) as Component<"svg", IconProps>
