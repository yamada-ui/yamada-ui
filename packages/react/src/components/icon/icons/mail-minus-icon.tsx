"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailMinus as OriginalMailMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailMinusIcon = component(Icon)({
  as: OriginalMailMinusIcon,
}) as Component<"svg", IconProps>
