"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Printer as OriginalPrinterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PrinterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PrinterIcon = component(Icon)({
  as: OriginalPrinterIcon,
}) as Component<"svg", IconProps>
