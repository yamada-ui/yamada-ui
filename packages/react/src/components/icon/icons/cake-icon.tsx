"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cake as OriginalCakeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CakeIcon = component(Icon)({ as: OriginalCakeIcon }) as Component<
  "svg",
  IconProps
>
