"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bomb as OriginalBombIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BombIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BombIcon = component(Icon)({ as: OriginalBombIcon }) as Component<
  "svg",
  IconProps
>
