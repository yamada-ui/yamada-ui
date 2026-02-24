"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Option as OriginalOptionIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OptionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OptionIcon = component(Icon)({
  as: OriginalOptionIcon,
}) as Component<"svg", IconProps>
