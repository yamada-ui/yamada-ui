"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MailQuestionMark as OriginalMailQuestionMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MailQuestionMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MailQuestionMarkIcon = component(Icon)({
  as: OriginalMailQuestionMarkIcon,
}) as Component<"svg", IconProps>
