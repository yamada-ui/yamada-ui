"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleUserRound as OriginalCircleUserRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleUserRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleUserRoundIcon = component(Icon)({
  as: OriginalCircleUserRoundIcon,
}) as Component<"svg", IconProps>
