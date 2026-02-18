"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Meh as OriginalMehIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MehIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MehIcon = component(Icon)({ as: OriginalMehIcon }) as Component<
  "svg",
  IconProps
>
