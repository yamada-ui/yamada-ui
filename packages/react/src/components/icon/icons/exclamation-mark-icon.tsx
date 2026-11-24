"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ExclamationMark as OriginalExclamationMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ExclamationMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ExclamationMarkIcon = component(Icon)({
  as: OriginalExclamationMarkIcon,
}) as Component<"svg", IconProps>
