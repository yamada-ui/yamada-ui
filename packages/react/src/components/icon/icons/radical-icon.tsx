"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Radical as OriginalRadicalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RadicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RadicalIcon = component(Icon)({
  as: OriginalRadicalIcon,
}) as Component<"svg", IconProps>
