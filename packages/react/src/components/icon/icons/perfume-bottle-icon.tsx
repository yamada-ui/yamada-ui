"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PerfumeBottle as OriginalPerfumeBottleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PerfumeBottleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PerfumeBottleIcon = component(Icon)({
  as: OriginalPerfumeBottleIcon,
}) as Component<"svg", IconProps>
