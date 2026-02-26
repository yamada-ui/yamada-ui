"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CheckLine as OriginalCheckLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CheckLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CheckLineIcon = component(Icon)({
  as: OriginalCheckLineIcon,
}) as Component<"svg", IconProps>
