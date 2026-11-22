"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mango as OriginalMangoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MangoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MangoIcon = component(Icon)({
  as: OriginalMangoIcon,
}) as Component<"svg", IconProps>
