"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PenLine as OriginalPenLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PenLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PenLineIcon = component(Icon)({
  as: OriginalPenLineIcon,
}) as Component<"svg", IconProps>
