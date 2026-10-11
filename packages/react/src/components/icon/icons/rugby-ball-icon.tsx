"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RugbyBall as OriginalRugbyBallIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RugbyBallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RugbyBallIcon = component(Icon)({
  as: OriginalRugbyBallIcon,
}) as Component<"svg", IconProps>
