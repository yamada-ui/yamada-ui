"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Flag as OriginalFlagIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FlagIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FlagIcon = component(Icon)({ as: OriginalFlagIcon }) as Component<
  "svg",
  IconProps
>
