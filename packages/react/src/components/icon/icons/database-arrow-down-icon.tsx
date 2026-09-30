"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseArrowDown as OriginalDatabaseArrowDownIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseArrowDownIcon = component(Icon)({
  as: OriginalDatabaseArrowDownIcon,
}) as Component<"svg", IconProps>
