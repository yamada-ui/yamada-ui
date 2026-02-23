"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneOff as OriginalPhoneOffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhoneOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhoneOffIcon = component(Icon)({
  as: OriginalPhoneOffIcon,
}) as Component<"svg", IconProps>
