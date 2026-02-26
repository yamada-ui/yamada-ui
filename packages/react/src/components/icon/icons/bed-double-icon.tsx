"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BedDouble as OriginalBedDoubleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BedDoubleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BedDoubleIcon = component(Icon)({
  as: OriginalBedDoubleIcon,
}) as Component<"svg", IconProps>
