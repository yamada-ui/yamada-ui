"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Theater as OriginalTheaterIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TheaterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TheaterIcon = component(Icon)({
  as: OriginalTheaterIcon,
}) as Component<"svg", IconProps>
