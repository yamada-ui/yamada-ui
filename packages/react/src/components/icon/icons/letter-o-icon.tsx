"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LetterO as OriginalLetterOIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LetterOIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LetterOIcon = component(Icon)({
  as: OriginalLetterOIcon,
}) as Component<"svg", IconProps>
