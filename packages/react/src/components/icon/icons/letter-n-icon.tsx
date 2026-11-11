"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterN as OriginalLetterNIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterNIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterNIcon = component(Icon)({
  as: OriginalLetterNIcon,
}) as Component<"svg", IconProps>
