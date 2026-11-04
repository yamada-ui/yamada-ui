"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mouth as OriginalMouthIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MouthIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MouthIcon = component(Icon)({
  as: OriginalMouthIcon,
}) as Component<"svg", IconProps>
