"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SendToBack as OriginalSendToBackIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SendToBackIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SendToBackIcon = component(Icon)({
  as: OriginalSendToBackIcon,
}) as Component<"svg", IconProps>
