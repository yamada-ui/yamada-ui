"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SmartphoneNfc as OriginalSmartphoneNfcIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SmartphoneNfcIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SmartphoneNfcIcon = component(Icon)({
  as: OriginalSmartphoneNfcIcon,
}) as Component<"svg", IconProps>
