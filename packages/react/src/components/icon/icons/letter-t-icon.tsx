"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterT as OriginalLetterTIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterTIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterTIcon = component(Icon)({
  as: OriginalLetterTIcon,
}) as Component<"svg", IconProps>
