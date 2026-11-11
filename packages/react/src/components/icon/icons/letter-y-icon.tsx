"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterY as OriginalLetterYIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterYIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterYIcon = component(Icon)({
  as: OriginalLetterYIcon,
}) as Component<"svg", IconProps>
