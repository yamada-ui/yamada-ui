"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Letters as OriginalLettersIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LettersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LettersIcon = component(Icon)({
  as: OriginalLettersIcon,
}) as Component<"svg", IconProps>
