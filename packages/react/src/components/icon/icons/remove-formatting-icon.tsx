"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RemoveFormatting as OriginalRemoveFormattingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RemoveFormattingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RemoveFormattingIcon = component(Icon)({
  as: OriginalRemoveFormattingIcon,
}) as Component<"svg", IconProps>
