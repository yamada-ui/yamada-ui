"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { KeyboardOff as OriginalKeyboardOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KeyboardOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KeyboardOffIcon = component(Icon)({
  as: OriginalKeyboardOffIcon,
}) as Component<"svg", IconProps>
