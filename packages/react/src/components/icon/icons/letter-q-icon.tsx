"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterQ as OriginalLetterQIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterQIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterQIcon = component(Icon)({
  as: OriginalLetterQIcon,
}) as Component<"svg", IconProps>
