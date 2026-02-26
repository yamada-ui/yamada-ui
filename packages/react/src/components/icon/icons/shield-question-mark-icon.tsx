"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldQuestionMark as OriginalShieldQuestionMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShieldQuestionMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShieldQuestionMarkIcon = component(Icon)({
  as: OriginalShieldQuestionMarkIcon,
}) as Component<"svg", IconProps>
