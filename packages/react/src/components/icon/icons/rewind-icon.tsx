"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Rewind as OriginalRewindIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RewindIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RewindIcon = component(Icon)({
  as: OriginalRewindIcon,
}) as Component<"svg", IconProps>
