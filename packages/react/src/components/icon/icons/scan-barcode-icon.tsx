"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanBarcode as OriginalScanBarcodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanBarcodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanBarcodeIcon = component(Icon)({
  as: OriginalScanBarcodeIcon,
}) as Component<"svg", IconProps>
