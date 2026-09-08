"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailClock as OriginalMailClockIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailClockIcon = component(Icon)({
  as: OriginalMailClockIcon,
}) as Component<"svg", IconProps>
