"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dam as OriginalDamIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DamIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DamIcon = component(Icon)({ as: OriginalDamIcon }) as Component<
  "svg",
  IconProps
>
