"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { EqualApproximatelyNot as OriginalEqualApproximatelyNotIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EqualApproximatelyNotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EqualApproximatelyNotIcon = component(Icon)({
  as: OriginalEqualApproximatelyNotIcon,
}) as Component<"svg", IconProps>
