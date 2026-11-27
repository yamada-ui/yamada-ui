"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterZ as OriginalLetterZIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterZIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterZIcon = component(Icon)({
  as: OriginalLetterZIcon,
}) as Component<"svg", IconProps>
