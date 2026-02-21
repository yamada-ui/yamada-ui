"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GamepadDirectional as OriginalGamepadDirectionalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GamepadDirectionalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GamepadDirectionalIcon = component(Icon)({
  as: OriginalGamepadDirectionalIcon,
}) as Component<"svg", IconProps>
