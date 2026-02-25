"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Type as OriginalTypeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TypeIcon = component(Icon)({ as: OriginalTypeIcon }) as Component<
  "svg",
  IconProps
>
