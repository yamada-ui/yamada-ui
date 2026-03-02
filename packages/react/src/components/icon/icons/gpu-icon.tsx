"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Gpu as OriginalGpuIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GpuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GpuIcon = component(Icon)({ as: OriginalGpuIcon }) as Component<
  "svg",
  IconProps
>
