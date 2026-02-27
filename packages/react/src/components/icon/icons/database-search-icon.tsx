"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseSearch as OriginalDatabaseSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseSearchIcon = component(Icon)({
  as: OriginalDatabaseSearchIcon,
}) as Component<"svg", IconProps>
