"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FoldVertical as OriginalFoldVerticalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FoldVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FoldVerticalIcon = component(Icon)({
  as: OriginalFoldVerticalIcon,
}) as Component<"svg", IconProps>
