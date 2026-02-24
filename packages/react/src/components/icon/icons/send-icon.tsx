"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Send as OriginalSendIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SendIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SendIcon = component(Icon)({ as: OriginalSendIcon }) as Component<
  "svg",
  IconProps
>
