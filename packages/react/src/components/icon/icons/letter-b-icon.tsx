"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterB as OriginalLetterBIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterBIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterBIcon = component(Icon)({
  as: OriginalLetterBIcon,
}) as Component<"svg", IconProps>
