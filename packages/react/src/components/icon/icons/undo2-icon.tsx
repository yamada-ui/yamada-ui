"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Undo2 as OriginalUndo2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Undo2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Undo2Icon = component(Icon)({
  as: OriginalUndo2Icon,
}) as Component<"svg", IconProps>
