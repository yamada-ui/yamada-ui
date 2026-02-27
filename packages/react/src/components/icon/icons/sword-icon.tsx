"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sword as OriginalSwordIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SwordIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SwordIcon = component(Icon)({
  as: OriginalSwordIcon,
}) as Component<"svg", IconProps>
