"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Phone as OriginalPhoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhoneIcon = component(Icon)({
  as: OriginalPhoneIcon,
}) as Component<"svg", IconProps>
