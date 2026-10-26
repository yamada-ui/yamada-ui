"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CpuAi as OriginalCpuAiIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CpuAiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CpuAiIcon = component(Icon)({
  as: OriginalCpuAiIcon,
}) as Component<"svg", IconProps>
