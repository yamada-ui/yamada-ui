"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Worm as OriginalWormIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WormIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WormIcon = component(Icon)({ as: OriginalWormIcon }) as Component<
  "svg",
  IconProps
>
