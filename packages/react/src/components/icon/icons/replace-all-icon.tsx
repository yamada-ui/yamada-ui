"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ReplaceAll as OriginalReplaceAllIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ReplaceAllIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ReplaceAllIcon = component(Icon)({
  as: OriginalReplaceAllIcon,
}) as Component<"svg", IconProps>
