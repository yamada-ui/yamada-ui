"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ad as OriginalAdIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AdIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AdIcon = component(Icon)({ as: OriginalAdIcon }) as Component<
  "svg",
  IconProps
>
