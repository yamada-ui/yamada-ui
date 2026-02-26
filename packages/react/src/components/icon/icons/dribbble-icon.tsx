"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dribbble as OriginalDribbbleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DribbbleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DribbbleIcon = component(Icon)({
  as: OriginalDribbbleIcon,
}) as Component<"svg", IconProps>
