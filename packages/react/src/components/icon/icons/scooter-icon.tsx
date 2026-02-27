"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Scooter as OriginalScooterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScooterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScooterIcon = component(Icon)({
  as: OriginalScooterIcon,
}) as Component<"svg", IconProps>
