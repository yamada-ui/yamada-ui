"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Info as OriginalInfoIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `InfoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const InfoIcon = component(Icon)({ as: OriginalInfoIcon }) as Component<
  "svg",
  IconProps
>
