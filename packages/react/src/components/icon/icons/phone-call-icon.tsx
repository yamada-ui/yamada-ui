"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneCall as OriginalPhoneCallIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhoneCallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhoneCallIcon = component(Icon)({
  as: OriginalPhoneCallIcon,
}) as Component<"svg", IconProps>
