"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterH as OriginalLetterHIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterHIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterHIcon = component(Icon)({
  as: OriginalLetterHIcon,
}) as Component<"svg", IconProps>
