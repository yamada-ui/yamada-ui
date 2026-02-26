"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TreePalm as OriginalTreePalmIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TreePalmIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TreePalmIcon = component(Icon)({
  as: OriginalTreePalmIcon,
}) as Component<"svg", IconProps>
