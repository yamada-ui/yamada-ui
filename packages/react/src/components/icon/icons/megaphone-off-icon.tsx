"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MegaphoneOff as OriginalMegaphoneOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MegaphoneOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MegaphoneOffIcon = component(Icon)({
  as: OriginalMegaphoneOffIcon,
}) as Component<"svg", IconProps>
