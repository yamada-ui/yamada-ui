"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SkipBack as OriginalSkipBackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SkipBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SkipBackIcon = component(Icon)({
  as: OriginalSkipBackIcon,
}) as Component<"svg", IconProps>
