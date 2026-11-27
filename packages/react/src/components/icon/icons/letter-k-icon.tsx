"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterK as OriginalLetterKIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterKIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterKIcon = component(Icon)({
  as: OriginalLetterKIcon,
}) as Component<"svg", IconProps>
