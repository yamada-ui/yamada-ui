"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Octagon as OriginalOctagonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OctagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OctagonIcon = component(Icon)({
  as: OriginalOctagonIcon,
}) as Component<"svg", IconProps>
