"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SoapDispenserDroplet as OriginalSoapDispenserDropletIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SoapDispenserDropletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SoapDispenserDropletIcon = component(Icon)({
  as: OriginalSoapDispenserDropletIcon,
}) as Component<"svg", IconProps>
