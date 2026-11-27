"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleExclamationPoint as OriginalCircleExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleExclamationPointIcon = component(Icon)({
  as: OriginalCircleExclamationPointIcon,
}) as Component<"svg", IconProps>
