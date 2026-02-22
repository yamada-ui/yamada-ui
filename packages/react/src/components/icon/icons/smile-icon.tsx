"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Smile as OriginalSmileIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SmileIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SmileIcon = component(Icon)({
  as: OriginalSmileIcon,
}) as Component<"svg", IconProps>
