"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EqualApproximately as OriginalEqualApproximatelyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EqualApproximatelyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EqualApproximatelyIcon = component(Icon)({
  as: OriginalEqualApproximatelyIcon,
}) as Component<"svg", IconProps>
