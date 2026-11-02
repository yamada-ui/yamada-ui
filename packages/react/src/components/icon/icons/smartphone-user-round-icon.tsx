"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SmartphoneUserRound as OriginalSmartphoneUserRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SmartphoneUserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SmartphoneUserRoundIcon = component(Icon)({
  as: OriginalSmartphoneUserRoundIcon,
}) as Component<"svg", IconProps>
