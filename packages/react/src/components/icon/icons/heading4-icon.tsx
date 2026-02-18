"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heading4 as OriginalHeading4Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Heading4Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Heading4Icon = component(Icon)({
  as: OriginalHeading4Icon,
}) as Component<"svg", IconProps>
