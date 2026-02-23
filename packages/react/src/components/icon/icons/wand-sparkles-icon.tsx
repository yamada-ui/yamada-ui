"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { WandSparkles as OriginalWandSparklesIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WandSparklesIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WandSparklesIcon = component(Icon)({
  as: OriginalWandSparklesIcon,
}) as Component<"svg", IconProps>
