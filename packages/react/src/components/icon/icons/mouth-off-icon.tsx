"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MouthOff as OriginalMouthOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MouthOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MouthOffIcon = component(Icon)({
  as: OriginalMouthOffIcon,
}) as Component<"svg", IconProps>
