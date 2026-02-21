"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneIncoming as OriginalPhoneIncomingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhoneIncomingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhoneIncomingIcon = component(Icon)({
  as: OriginalPhoneIncomingIcon,
}) as Component<"svg", IconProps>
