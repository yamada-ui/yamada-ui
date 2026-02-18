"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanSearch as OriginalScanSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanSearchIcon = component(Icon)({
  as: OriginalScanSearchIcon,
}) as Component<"svg", IconProps>
