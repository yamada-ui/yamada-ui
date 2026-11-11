"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterE as OriginalLetterEIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterEIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterEIcon = component(Icon)({
  as: OriginalLetterEIcon,
}) as Component<"svg", IconProps>
