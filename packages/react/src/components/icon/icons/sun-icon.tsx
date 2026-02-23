"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sun as OriginalSunIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SunIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SunIcon = component(Icon)({ as: OriginalSunIcon }) as Component<
  "svg",
  IconProps
>
