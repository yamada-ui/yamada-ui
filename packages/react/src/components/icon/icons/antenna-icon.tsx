"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Antenna as OriginalAntennaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AntennaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AntennaIcon = component(Icon)({
  as: OriginalAntennaIcon,
}) as Component<"svg", IconProps>
