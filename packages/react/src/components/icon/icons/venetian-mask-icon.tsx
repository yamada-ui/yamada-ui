"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { VenetianMask as OriginalVenetianMaskIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VenetianMaskIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VenetianMaskIcon = component(Icon)({
  as: OriginalVenetianMaskIcon,
}) as Component<"svg", IconProps>
