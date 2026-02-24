"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailCheck as OriginalMailCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailCheckIcon = component(Icon)({
  as: OriginalMailCheckIcon,
}) as Component<"svg", IconProps>
