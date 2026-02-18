"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { DatabaseZap as OriginalDatabaseZapIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DatabaseZapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DatabaseZapIcon = component(Icon)({
  as: OriginalDatabaseZapIcon,
}) as Component<"svg", IconProps>
