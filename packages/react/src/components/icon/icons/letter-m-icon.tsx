"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterM as OriginalLetterMIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterMIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterMIcon = component(Icon)({
  as: OriginalLetterMIcon,
}) as Component<"svg", IconProps>
