"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HardDrive as OriginalHardDriveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HardDriveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HardDriveIcon = component(Icon)({
  as: OriginalHardDriveIcon,
}) as Component<"svg", IconProps>
