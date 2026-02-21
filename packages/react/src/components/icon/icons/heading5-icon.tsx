"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heading5 as OriginalHeading5Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Heading5Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Heading5Icon = component(Icon)({
  as: OriginalHeading5Icon,
}) as Component<"svg", IconProps>
