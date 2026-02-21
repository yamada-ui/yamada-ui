"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cone as OriginalConeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ConeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ConeIcon = component(Icon)({ as: OriginalConeIcon }) as Component<
  "svg",
  IconProps
>
