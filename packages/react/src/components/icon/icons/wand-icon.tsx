"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Wand as OriginalWandIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WandIcon = component(Icon)({ as: OriginalWandIcon }) as Component<
  "svg",
  IconProps
>
