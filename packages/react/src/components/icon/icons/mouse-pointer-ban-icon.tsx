"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MousePointerBan as OriginalMousePointerBanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MousePointerBanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MousePointerBanIcon = component(Icon)({
  as: OriginalMousePointerBanIcon,
}) as Component<"svg", IconProps>
