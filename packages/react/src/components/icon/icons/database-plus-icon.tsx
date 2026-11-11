"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabasePlus as OriginalDatabasePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabasePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabasePlusIcon = component(Icon)({
  as: OriginalDatabasePlusIcon,
}) as Component<"svg", IconProps>
