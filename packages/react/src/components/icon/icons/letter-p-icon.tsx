"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterP as OriginalLetterPIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterPIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterPIcon = component(Icon)({
  as: OriginalLetterPIcon,
}) as Component<"svg", IconProps>
