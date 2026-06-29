"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TagPlus as OriginalTagPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TagPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TagPlusIcon = component(Icon)({
  as: OriginalTagPlusIcon,
}) as Component<"svg", IconProps>
