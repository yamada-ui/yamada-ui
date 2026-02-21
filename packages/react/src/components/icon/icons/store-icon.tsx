"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Store as OriginalStoreIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `StoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const StoreIcon = component(Icon)({
  as: OriginalStoreIcon,
}) as Component<"svg", IconProps>
