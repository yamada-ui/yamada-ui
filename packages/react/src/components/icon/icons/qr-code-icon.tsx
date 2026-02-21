"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { QrCode as OriginalQrCodeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `QrCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const QrCodeIcon = component(Icon)({
  as: OriginalQrCodeIcon,
}) as Component<"svg", IconProps>
