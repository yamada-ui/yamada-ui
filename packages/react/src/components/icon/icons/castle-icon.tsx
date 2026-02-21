"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Castle as OriginalCastleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CastleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CastleIcon = component(Icon)({
  as: OriginalCastleIcon,
}) as Component<"svg", IconProps>
