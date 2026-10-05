"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailPen as OriginalMailPenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailPenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailPenIcon = component(Icon)({
  as: OriginalMailPenIcon,
}) as Component<"svg", IconProps>
