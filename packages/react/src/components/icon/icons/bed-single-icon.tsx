"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BedSingle as OriginalBedSingleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BedSingleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BedSingleIcon = component(Icon)({
  as: OriginalBedSingleIcon,
}) as Component<"svg", IconProps>
