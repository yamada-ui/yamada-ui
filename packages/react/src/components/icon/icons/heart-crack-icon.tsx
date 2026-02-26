"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HeartCrack as OriginalHeartCrackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeartCrackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeartCrackIcon = component(Icon)({
  as: OriginalHeartCrackIcon,
}) as Component<"svg", IconProps>
