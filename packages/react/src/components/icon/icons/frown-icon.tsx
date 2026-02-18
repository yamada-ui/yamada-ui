"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Frown as OriginalFrownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FrownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FrownIcon = component(Icon)({
  as: OriginalFrownIcon,
}) as Component<"svg", IconProps>
