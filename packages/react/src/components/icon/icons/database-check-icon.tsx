"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseCheck as OriginalDatabaseCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseCheckIcon = component(Icon)({
  as: OriginalDatabaseCheckIcon,
}) as Component<"svg", IconProps>
