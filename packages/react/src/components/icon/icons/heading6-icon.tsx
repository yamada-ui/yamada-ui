"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heading6 as OriginalHeading6Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Heading6Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Heading6Icon = component(Icon)({
  as: OriginalHeading6Icon,
}) as Component<"svg", IconProps>
