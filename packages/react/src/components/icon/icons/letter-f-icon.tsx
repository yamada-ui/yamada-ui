"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterF as OriginalLetterFIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterFIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterFIcon = component(Icon)({
  as: OriginalLetterFIcon,
}) as Component<"svg", IconProps>
