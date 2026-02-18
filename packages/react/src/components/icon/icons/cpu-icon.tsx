"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cpu as OriginalCpuIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CpuIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CpuIcon = component(Icon)({ as: OriginalCpuIcon }) as Component<
  "svg",
  IconProps
>
