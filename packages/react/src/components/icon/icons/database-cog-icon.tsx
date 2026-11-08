"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseCog as OriginalDatabaseCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseCogIcon = component(Icon)({
  as: OriginalDatabaseCogIcon,
}) as Component<"svg", IconProps>
