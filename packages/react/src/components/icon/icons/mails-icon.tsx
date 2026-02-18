"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mails as OriginalMailsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailsIcon = component(Icon)({
  as: OriginalMailsIcon,
}) as Component<"svg", IconProps>
