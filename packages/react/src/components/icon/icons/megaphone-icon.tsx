"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Megaphone as OriginalMegaphoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MegaphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MegaphoneIcon = component(Icon)({
  as: OriginalMegaphoneIcon,
}) as Component<"svg", IconProps>
