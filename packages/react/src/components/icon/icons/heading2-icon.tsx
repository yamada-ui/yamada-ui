"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heading2 as OriginalHeading2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Heading2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Heading2Icon = component(Icon)({
  as: OriginalHeading2Icon,
}) as Component<"svg", IconProps>
