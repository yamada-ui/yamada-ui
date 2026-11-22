"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Earbuds as OriginalEarbudsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EarbudsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EarbudsIcon = component(Icon)({
  as: OriginalEarbudsIcon,
}) as Component<"svg", IconProps>
