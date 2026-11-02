"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterSpacing as OriginalLetterSpacingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterSpacingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterSpacingIcon = component(Icon)({
  as: OriginalLetterSpacingIcon,
}) as Component<"svg", IconProps>
