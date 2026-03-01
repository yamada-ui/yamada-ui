"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PencilLine as OriginalPencilLineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PencilLineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PencilLineIcon = component(Icon)({
  as: OriginalPencilLineIcon,
}) as Component<"svg", IconProps>
