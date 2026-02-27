"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ligature as OriginalLigatureIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LigatureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LigatureIcon = component(Icon)({
  as: OriginalLigatureIcon,
}) as Component<"svg", IconProps>
