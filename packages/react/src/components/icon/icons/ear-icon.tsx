"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ear as OriginalEarIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `EarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const EarIcon = component(Icon)({ as: OriginalEarIcon }) as Component<
  "svg",
  IconProps
>
