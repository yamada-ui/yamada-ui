"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanSquare as OriginalScanSquareIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanSquareIcon = component(Icon)({
  as: OriginalScanSquareIcon,
}) as Component<"svg", IconProps>
