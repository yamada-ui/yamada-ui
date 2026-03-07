"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Check as OriginalCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CheckIcon = component(Icon)({
  as: OriginalCheckIcon,
}) as Component<"svg", IconProps>
