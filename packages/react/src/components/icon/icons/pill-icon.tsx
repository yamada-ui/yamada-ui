"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pill as OriginalPillIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PillIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PillIcon = component(Icon)({ as: OriginalPillIcon }) as Component<
  "svg",
  IconProps
>
