"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cupcake as OriginalCupcakeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CupcakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CupcakeIcon = component(Icon)({
  as: OriginalCupcakeIcon,
}) as Component<"svg", IconProps>
