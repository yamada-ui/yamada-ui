"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bed as OriginalBedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BedIcon = component(Icon)({ as: OriginalBedIcon }) as Component<
  "svg",
  IconProps
>
