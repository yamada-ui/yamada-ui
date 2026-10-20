"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailDot as OriginalMailDotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailDotIcon = component(Icon)({
  as: OriginalMailDotIcon,
}) as Component<"svg", IconProps>
