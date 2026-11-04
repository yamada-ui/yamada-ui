"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseX as OriginalDatabaseXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseXIcon = component(Icon)({
  as: OriginalDatabaseXIcon,
}) as Component<"svg", IconProps>
