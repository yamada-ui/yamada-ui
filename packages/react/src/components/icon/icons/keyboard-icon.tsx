"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Keyboard as OriginalKeyboardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KeyboardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KeyboardIcon = component(Icon)({
  as: OriginalKeyboardIcon,
}) as Component<"svg", IconProps>
