"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Microwave as OriginalMicrowaveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MicrowaveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MicrowaveIcon = component(Icon)({
  as: OriginalMicrowaveIcon,
}) as Component<"svg", IconProps>
