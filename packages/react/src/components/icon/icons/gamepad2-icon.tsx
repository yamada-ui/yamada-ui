"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Gamepad2 as OriginalGamepad2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Gamepad2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Gamepad2Icon = component(Icon)({
  as: OriginalGamepad2Icon,
}) as Component<"svg", IconProps>
