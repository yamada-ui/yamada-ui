"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mailbox as OriginalMailboxIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailboxIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailboxIcon = component(Icon)({
  as: OriginalMailboxIcon,
}) as Component<"svg", IconProps>
