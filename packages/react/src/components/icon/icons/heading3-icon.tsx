"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heading3 as OriginalHeading3Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Heading3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Heading3Icon = component(Icon)({
  as: OriginalHeading3Icon,
}) as Component<"svg", IconProps>
