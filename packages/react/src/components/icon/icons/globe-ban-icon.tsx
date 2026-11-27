"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GlobeBan as OriginalGlobeBanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GlobeBanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GlobeBanIcon = component(Icon)({
  as: OriginalGlobeBanIcon,
}) as Component<"svg", IconProps>
