"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cable as OriginalCableIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CableIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CableIcon = component(Icon)({
  as: OriginalCableIcon,
}) as Component<"svg", IconProps>
