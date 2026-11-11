"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MopSparkles as OriginalMopSparklesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MopSparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MopSparklesIcon = component(Icon)({
  as: OriginalMopSparklesIcon,
}) as Component<"svg", IconProps>
