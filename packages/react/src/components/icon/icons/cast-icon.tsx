"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cast as OriginalCastIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CastIcon = component(Icon)({ as: OriginalCastIcon }) as Component<
  "svg",
  IconProps
>
