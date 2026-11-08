"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterA as OriginalLetterAIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterAIcon = component(Icon)({
  as: OriginalLetterAIcon,
}) as Component<"svg", IconProps>
