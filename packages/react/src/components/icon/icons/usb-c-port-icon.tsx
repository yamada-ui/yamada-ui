"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { UsbCPort as OriginalUsbCPortIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UsbCPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UsbCPortIcon = component(Icon)({
  as: OriginalUsbCPortIcon,
}) as Component<"svg", IconProps>
