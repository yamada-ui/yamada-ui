"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SavePen as OriginalSavePenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SavePenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SavePenIcon = component(Icon)({
  as: OriginalSavePenIcon,
}) as Component<"svg", IconProps>
