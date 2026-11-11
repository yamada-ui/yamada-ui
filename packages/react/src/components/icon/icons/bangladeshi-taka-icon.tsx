"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BangladeshiTaka as OriginalBangladeshiTakaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BangladeshiTakaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BangladeshiTakaIcon = component(Icon)({
  as: OriginalBangladeshiTakaIcon,
}) as Component<"svg", IconProps>
