"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterX as OriginalLetterXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterXIcon = component(Icon)({
  as: OriginalLetterXIcon,
}) as Component<"svg", IconProps>
