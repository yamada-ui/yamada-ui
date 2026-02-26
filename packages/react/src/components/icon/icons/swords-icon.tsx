"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Swords as OriginalSwordsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SwordsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SwordsIcon = component(Icon)({
  as: OriginalSwordsIcon,
}) as Component<"svg", IconProps>
