"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { RadioReceiver as OriginalRadioReceiverIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `RadioReceiverIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const RadioReceiverIcon = component(Icon)({
  as: OriginalRadioReceiverIcon,
}) as Component<"svg", IconProps>
