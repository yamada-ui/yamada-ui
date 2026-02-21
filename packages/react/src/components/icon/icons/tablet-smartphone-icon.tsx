"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TabletSmartphone as OriginalTabletSmartphoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TabletSmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TabletSmartphoneIcon = component(Icon)({
  as: OriginalTabletSmartphoneIcon,
}) as Component<"svg", IconProps>
