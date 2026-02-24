"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CableCar as OriginalCableCarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CableCarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CableCarIcon = component(Icon)({
  as: OriginalCableCarIcon,
}) as Component<"svg", IconProps>
