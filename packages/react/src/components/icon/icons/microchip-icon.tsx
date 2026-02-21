"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Microchip as OriginalMicrochipIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MicrochipIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MicrochipIcon = component(Icon)({
  as: OriginalMicrochipIcon,
}) as Component<"svg", IconProps>
