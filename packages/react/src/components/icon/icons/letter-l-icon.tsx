"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterL as OriginalLetterLIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterLIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterLIcon = component(Icon)({
  as: OriginalLetterLIcon,
}) as Component<"svg", IconProps>
