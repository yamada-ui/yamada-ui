"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterR as OriginalLetterRIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterRIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterRIcon = component(Icon)({
  as: OriginalLetterRIcon,
}) as Component<"svg", IconProps>
