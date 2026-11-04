"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DoorClosedPackage as OriginalDoorClosedPackageIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DoorClosedPackageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DoorClosedPackageIcon = component(Icon)({
  as: OriginalDoorClosedPackageIcon,
}) as Component<"svg", IconProps>
