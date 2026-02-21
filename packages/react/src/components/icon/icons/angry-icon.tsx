"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Angry as OriginalAngryIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AngryIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AngryIcon = component(Icon)({
  as: OriginalAngryIcon,
}) as Component<"svg", IconProps>
