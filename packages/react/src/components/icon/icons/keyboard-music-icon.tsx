"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { KeyboardMusic as OriginalKeyboardMusicIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KeyboardMusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KeyboardMusicIcon = component(Icon)({
  as: OriginalKeyboardMusicIcon,
}) as Component<"svg", IconProps>
