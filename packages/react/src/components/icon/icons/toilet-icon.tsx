"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Toilet as OriginalToiletIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ToiletIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ToiletIcon = component(Icon)({
  as: OriginalToiletIcon,
}) as Component<"svg", IconProps>
