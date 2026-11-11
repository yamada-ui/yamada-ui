"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { KazakhTenge as OriginalKazakhTengeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KazakhTengeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KazakhTengeIcon = component(Icon)({
  as: OriginalKazakhTengeIcon,
}) as Component<"svg", IconProps>
