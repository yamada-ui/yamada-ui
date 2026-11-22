"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterS as OriginalLetterSIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterSIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterSIcon = component(Icon)({
  as: OriginalLetterSIcon,
}) as Component<"svg", IconProps>
