"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanHeart as OriginalScanHeartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanHeartIcon = component(Icon)({
  as: OriginalScanHeartIcon,
}) as Component<"svg", IconProps>
