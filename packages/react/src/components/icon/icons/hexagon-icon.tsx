"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hexagon as OriginalHexagonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HexagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HexagonIcon = component(Icon)({
  as: OriginalHexagonIcon,
}) as Component<"svg", IconProps>
