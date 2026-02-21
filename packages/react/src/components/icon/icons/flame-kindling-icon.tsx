"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FlameKindling as OriginalFlameKindlingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlameKindlingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlameKindlingIcon = component(Icon)({
  as: OriginalFlameKindlingIcon,
}) as Component<"svg", IconProps>
