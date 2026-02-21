"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CreativeCommons as OriginalCreativeCommonsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CreativeCommonsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CreativeCommonsIcon = component(Icon)({
  as: OriginalCreativeCommonsIcon,
}) as Component<"svg", IconProps>
