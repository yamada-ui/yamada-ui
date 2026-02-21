"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Replace as OriginalReplaceIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReplaceIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReplaceIcon = component(Icon)({
  as: OriginalReplaceIcon,
}) as Component<"svg", IconProps>
