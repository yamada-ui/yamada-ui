"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterW as OriginalLetterWIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterWIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterWIcon = component(Icon)({
  as: OriginalLetterWIcon,
}) as Component<"svg", IconProps>
