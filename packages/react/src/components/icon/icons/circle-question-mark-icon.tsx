"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CircleQuestionMark as OriginalCircleQuestionMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CircleQuestionMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CircleQuestionMarkIcon = component(Icon)({
  as: OriginalCircleQuestionMarkIcon,
}) as Component<"svg", IconProps>
