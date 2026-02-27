"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Flashlight as OriginalFlashlightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlashlightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlashlightIcon = component(Icon)({
  as: OriginalFlashlightIcon,
}) as Component<"svg", IconProps>
