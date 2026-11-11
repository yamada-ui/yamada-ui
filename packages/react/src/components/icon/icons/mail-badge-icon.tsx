"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailBadge as OriginalMailBadgeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailBadgeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailBadgeIcon = component(Icon)({
  as: OriginalMailBadgeIcon,
}) as Component<"svg", IconProps>
