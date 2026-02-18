"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeQuestionMark as OriginalBadgeQuestionMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BadgeQuestionMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BadgeQuestionMarkIcon = component(Icon)({
  as: OriginalBadgeQuestionMarkIcon,
}) as Component<"svg", IconProps>
