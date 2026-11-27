"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterJ as OriginalLetterJIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterJIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterJIcon = component(Icon)({
  as: OriginalLetterJIcon,
}) as Component<"svg", IconProps>
