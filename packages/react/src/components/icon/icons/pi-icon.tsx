"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Pi as OriginalPiIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PiIcon = component(Icon)({ as: OriginalPiIcon }) as Component<
  "svg",
  IconProps
>
