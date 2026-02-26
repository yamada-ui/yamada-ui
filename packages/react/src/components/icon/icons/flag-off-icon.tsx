"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlagOff as OriginalFlagOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlagOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlagOffIcon = component(Icon)({
  as: OriginalFlagOffIcon,
}) as Component<"svg", IconProps>
