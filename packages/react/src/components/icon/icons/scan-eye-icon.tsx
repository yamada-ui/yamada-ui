"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanEye as OriginalScanEyeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanEyeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanEyeIcon = component(Icon)({
  as: OriginalScanEyeIcon,
}) as Component<"svg", IconProps>
