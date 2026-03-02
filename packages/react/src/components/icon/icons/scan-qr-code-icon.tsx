"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ScanQrCode as OriginalScanQrCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ScanQrCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ScanQrCodeIcon = component(Icon)({
  as: OriginalScanQrCodeIcon,
}) as Component<"svg", IconProps>
