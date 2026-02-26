"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PencilRuler as OriginalPencilRulerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PencilRulerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PencilRulerIcon = component(Icon)({
  as: OriginalPencilRulerIcon,
}) as Component<"svg", IconProps>
