"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BringToFront as OriginalBringToFrontIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BringToFrontIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BringToFrontIcon = component(Icon)({
  as: OriginalBringToFrontIcon,
}) as Component<"svg", IconProps>
