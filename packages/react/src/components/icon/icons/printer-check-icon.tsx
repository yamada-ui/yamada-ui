"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PrinterCheck as OriginalPrinterCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PrinterCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PrinterCheckIcon = component(Icon)({
  as: OriginalPrinterCheckIcon,
}) as Component<"svg", IconProps>
