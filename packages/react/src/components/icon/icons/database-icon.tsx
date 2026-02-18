"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Database as OriginalDatabaseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseIcon = component(Icon)({
  as: OriginalDatabaseIcon,
}) as Component<"svg", IconProps>
