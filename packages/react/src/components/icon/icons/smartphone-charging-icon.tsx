"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SmartphoneCharging as OriginalSmartphoneChargingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SmartphoneChargingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SmartphoneChargingIcon = component(Icon)({
  as: OriginalSmartphoneChargingIcon,
}) as Component<"svg", IconProps>
