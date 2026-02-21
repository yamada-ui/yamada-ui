"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { SendHorizontal as OriginalSendHorizontalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SendHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SendHorizontalIcon = component(Icon)({
  as: OriginalSendHorizontalIcon,
}) as Component<"svg", IconProps>
