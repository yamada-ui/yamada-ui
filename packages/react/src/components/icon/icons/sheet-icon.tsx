"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sheet as OriginalSheetIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SheetIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SheetIcon = component(Icon)({
  as: OriginalSheetIcon,
}) as Component<"svg", IconProps>
