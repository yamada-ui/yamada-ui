"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleUser as OriginalCircleUserIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleUserIcon = component(Icon)({
  as: OriginalCircleUserIcon,
}) as Component<"svg", IconProps>
