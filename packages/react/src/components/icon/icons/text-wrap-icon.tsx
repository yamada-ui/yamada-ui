"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TextWrap as OriginalTextWrapIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TextWrapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TextWrapIcon = component(Icon)({
  as: OriginalTextWrapIcon,
}) as Component<"svg", IconProps>
