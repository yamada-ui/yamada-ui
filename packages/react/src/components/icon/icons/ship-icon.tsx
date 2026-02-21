"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ship as OriginalShipIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShipIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShipIcon = component(Icon)({ as: OriginalShipIcon }) as Component<
  "svg",
  IconProps
>
