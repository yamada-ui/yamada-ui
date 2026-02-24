"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BottleWine as OriginalBottleWineIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BottleWineIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BottleWineIcon = component(Icon)({
  as: OriginalBottleWineIcon,
}) as Component<"svg", IconProps>
