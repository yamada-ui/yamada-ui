"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailX as OriginalMailXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailXIcon = component(Icon)({
  as: OriginalMailXIcon,
}) as Component<"svg", IconProps>
