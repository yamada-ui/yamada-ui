"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { QuestionMark as OriginalQuestionMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `QuestionMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const QuestionMarkIcon = component(Icon)({
  as: OriginalQuestionMarkIcon,
}) as Component<"svg", IconProps>
