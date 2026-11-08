"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterI as OriginalLetterIIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterIIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterIIcon = component(Icon)({
  as: OriginalLetterIIcon,
}) as Component<"svg", IconProps>
