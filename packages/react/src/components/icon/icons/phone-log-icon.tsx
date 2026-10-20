"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneLog as OriginalPhoneLogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhoneLogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhoneLogIcon = component(Icon)({
  as: OriginalPhoneLogIcon,
}) as Component<"svg", IconProps>
