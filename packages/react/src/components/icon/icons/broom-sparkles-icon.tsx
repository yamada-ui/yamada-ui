"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BroomSparkles as OriginalBroomSparklesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BroomSparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BroomSparklesIcon = component(Icon)({
  as: OriginalBroomSparklesIcon,
}) as Component<"svg", IconProps>
