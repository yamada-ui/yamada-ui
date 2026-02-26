"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Instagram as OriginalInstagramIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `InstagramIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const InstagramIcon = component(Icon)({
  as: OriginalInstagramIcon,
}) as Component<"svg", IconProps>
