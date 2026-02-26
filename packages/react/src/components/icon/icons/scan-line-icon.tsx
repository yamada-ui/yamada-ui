"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanLine as OriginalScanLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanLineIcon = component(Icon)({
  as: OriginalScanLineIcon,
}) as Component<"svg", IconProps>
