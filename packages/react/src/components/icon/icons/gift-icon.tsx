"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Gift as OriginalGiftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GiftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GiftIcon = component(Icon)({ as: OriginalGiftIcon }) as Component<
  "svg",
  IconProps
>
