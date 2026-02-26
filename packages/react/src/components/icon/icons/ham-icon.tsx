"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ham as OriginalHamIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HamIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HamIcon = component(Icon)({ as: OriginalHamIcon }) as Component<
  "svg",
  IconProps
>
