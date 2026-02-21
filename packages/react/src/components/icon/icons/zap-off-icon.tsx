"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ZapOff as OriginalZapOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZapOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZapOffIcon = component(Icon)({
  as: OriginalZapOffIcon,
}) as Component<"svg", IconProps>
