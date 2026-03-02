"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Church as OriginalChurchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ChurchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ChurchIcon = component(Icon)({
  as: OriginalChurchIcon,
}) as Component<"svg", IconProps>
