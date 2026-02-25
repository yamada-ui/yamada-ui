"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Joystick as OriginalJoystickIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `JoystickIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const JoystickIcon = component(Icon)({
  as: OriginalJoystickIcon,
}) as Component<"svg", IconProps>
