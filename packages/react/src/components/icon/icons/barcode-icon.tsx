"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Barcode as OriginalBarcodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BarcodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BarcodeIcon = component(Icon)({
  as: OriginalBarcodeIcon,
}) as Component<"svg", IconProps>
