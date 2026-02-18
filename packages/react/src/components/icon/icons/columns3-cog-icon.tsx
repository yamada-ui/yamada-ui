"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Columns3Cog as OriginalColumns3CogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Columns3CogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Columns3CogIcon = component(Icon)({
  as: OriginalColumns3CogIcon,
}) as Component<"svg", IconProps>
