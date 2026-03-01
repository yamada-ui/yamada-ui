"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanFace as OriginalScanFaceIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanFaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanFaceIcon = component(Icon)({
  as: OriginalScanFaceIcon,
}) as Component<"svg", IconProps>
