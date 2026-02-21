"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heading1 as OriginalHeading1Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Heading1Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Heading1Icon = component(Icon)({
  as: OriginalHeading1Icon,
}) as Component<"svg", IconProps>
