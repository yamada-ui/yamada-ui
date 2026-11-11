"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ToothbrushSparkles as OriginalToothbrushSparklesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ToothbrushSparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ToothbrushSparklesIcon = component(Icon)({
  as: OriginalToothbrushSparklesIcon,
}) as Component<"svg", IconProps>
