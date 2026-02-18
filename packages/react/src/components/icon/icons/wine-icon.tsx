"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Wine as OriginalWineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WineIcon = component(Icon)({ as: OriginalWineIcon }) as Component<
  "svg",
  IconProps
>
