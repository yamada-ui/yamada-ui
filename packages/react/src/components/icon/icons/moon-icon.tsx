"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Moon as OriginalMoonIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MoonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MoonIcon = component(Icon)({ as: OriginalMoonIcon }) as Component<
  "svg",
  IconProps
>
