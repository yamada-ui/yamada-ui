"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterD as OriginalLetterDIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterDIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterDIcon = component(Icon)({
  as: OriginalLetterDIcon,
}) as Component<"svg", IconProps>
