"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Presentation as OriginalPresentationIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PresentationIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PresentationIcon = component(Icon)({
  as: OriginalPresentationIcon,
}) as Component<"svg", IconProps>
