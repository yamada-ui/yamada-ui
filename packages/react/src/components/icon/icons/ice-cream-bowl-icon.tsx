"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { IceCreamBowl as OriginalIceCreamBowlIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `IceCreamBowlIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const IceCreamBowlIcon = component(Icon)({
  as: OriginalIceCreamBowlIcon,
}) as Component<"svg", IconProps>
