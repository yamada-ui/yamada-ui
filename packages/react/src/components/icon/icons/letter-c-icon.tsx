"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterC as OriginalLetterCIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterCIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterCIcon = component(Icon)({
  as: OriginalLetterCIcon,
}) as Component<"svg", IconProps>
