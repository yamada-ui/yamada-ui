"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PrinterX as OriginalPrinterXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PrinterXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PrinterXIcon = component(Icon)({
  as: OriginalPrinterXIcon,
}) as Component<"svg", IconProps>
