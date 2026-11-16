"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailExclamationPoint as OriginalMailExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailExclamationPointIcon = component(Icon)({
  as: OriginalMailExclamationPointIcon,
}) as Component<"svg", IconProps>
