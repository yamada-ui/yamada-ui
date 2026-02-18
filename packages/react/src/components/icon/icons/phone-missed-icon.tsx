"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PhoneMissed as OriginalPhoneMissedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhoneMissedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhoneMissedIcon = component(Icon)({
  as: OriginalPhoneMissedIcon,
}) as Component<"svg", IconProps>
