"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Target as OriginalTargetIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TargetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TargetIcon = component(Icon)({
  as: OriginalTargetIcon,
}) as Component<"svg", IconProps>
