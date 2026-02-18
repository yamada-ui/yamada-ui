"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Skull as OriginalSkullIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SkullIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SkullIcon = component(Icon)({
  as: OriginalSkullIcon,
}) as Component<"svg", IconProps>
