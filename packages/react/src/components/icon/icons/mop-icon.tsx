"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Mop as OriginalMopIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MopIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MopIcon = component(Icon)({ as: OriginalMopIcon }) as Component<
  "svg",
  IconProps
>
