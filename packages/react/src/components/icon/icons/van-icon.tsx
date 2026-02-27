"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Van as OriginalVanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VanIcon = component(Icon)({ as: OriginalVanIcon }) as Component<
  "svg",
  IconProps
>
