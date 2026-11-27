"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterG as OriginalLetterGIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterGIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterGIcon = component(Icon)({
  as: OriginalLetterGIcon,
}) as Component<"svg", IconProps>
