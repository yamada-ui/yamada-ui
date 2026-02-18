"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EthernetPort as OriginalEthernetPortIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EthernetPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EthernetPortIcon = component(Icon)({
  as: OriginalEthernetPortIcon,
}) as Component<"svg", IconProps>
