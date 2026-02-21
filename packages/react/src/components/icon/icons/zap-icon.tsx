"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Zap as OriginalZapIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ZapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ZapIcon = component(Icon)({ as: OriginalZapIcon }) as Component<
  "svg",
  IconProps
>
