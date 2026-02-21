"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BoomBox as OriginalBoomBoxIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BoomBoxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BoomBoxIcon = component(Icon)({
  as: OriginalBoomBoxIcon,
}) as Component<"svg", IconProps>
