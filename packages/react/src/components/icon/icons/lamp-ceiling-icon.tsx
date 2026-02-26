"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LampCeiling as OriginalLampCeilingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LampCeilingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LampCeilingIcon = component(Icon)({
  as: OriginalLampCeilingIcon,
}) as Component<"svg", IconProps>
