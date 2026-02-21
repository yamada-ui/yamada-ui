"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Trash2 as OriginalTrash2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Trash2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Trash2Icon = component(Icon)({
  as: OriginalTrash2Icon,
}) as Component<"svg", IconProps>
