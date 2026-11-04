"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanBox as OriginalScanBoxIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanBoxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanBoxIcon = component(Icon)({
  as: OriginalScanBoxIcon,
}) as Component<"svg", IconProps>
