"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Smartphone as OriginalSmartphoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SmartphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SmartphoneIcon = component(Icon)({
  as: OriginalSmartphoneIcon,
}) as Component<"svg", IconProps>
