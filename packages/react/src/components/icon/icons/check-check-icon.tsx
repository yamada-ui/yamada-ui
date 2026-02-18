"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CheckCheck as OriginalCheckCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CheckCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CheckCheckIcon = component(Icon)({
  as: OriginalCheckCheckIcon,
}) as Component<"svg", IconProps>
