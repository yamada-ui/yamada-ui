"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanText as OriginalScanTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanTextIcon = component(Icon)({
  as: OriginalScanTextIcon,
}) as Component<"svg", IconProps>
