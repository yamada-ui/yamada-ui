"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterU as OriginalLetterUIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterUIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterUIcon = component(Icon)({
  as: OriginalLetterUIcon,
}) as Component<"svg", IconProps>
