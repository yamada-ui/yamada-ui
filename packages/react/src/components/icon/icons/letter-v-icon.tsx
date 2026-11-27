"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterV as OriginalLetterVIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterVIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterVIcon = component(Icon)({
  as: OriginalLetterVIcon,
}) as Component<"svg", IconProps>
