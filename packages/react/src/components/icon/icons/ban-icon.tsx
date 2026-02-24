"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Ban as OriginalBanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BanIcon = component(Icon)({ as: OriginalBanIcon }) as Component<
  "svg",
  IconProps
>
