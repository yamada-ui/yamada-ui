"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Usb as OriginalUsbIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UsbIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UsbIcon = component(Icon)({ as: OriginalUsbIcon }) as Component<
  "svg",
  IconProps
>
