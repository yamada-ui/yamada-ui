"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PlugZap as OriginalPlugZapIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlugZapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlugZapIcon = component(Icon)({
  as: OriginalPlugZapIcon,
}) as Component<"svg", IconProps>
