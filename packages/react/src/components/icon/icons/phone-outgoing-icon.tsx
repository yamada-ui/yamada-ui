"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneOutgoing as OriginalPhoneOutgoingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhoneOutgoingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhoneOutgoingIcon = component(Icon)({
  as: OriginalPhoneOutgoingIcon,
}) as Component<"svg", IconProps>
