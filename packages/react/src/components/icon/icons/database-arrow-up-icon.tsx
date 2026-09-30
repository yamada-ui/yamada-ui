"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseArrowUp as OriginalDatabaseArrowUpIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseArrowUpIcon = component(Icon)({
  as: OriginalDatabaseArrowUpIcon,
}) as Component<"svg", IconProps>
