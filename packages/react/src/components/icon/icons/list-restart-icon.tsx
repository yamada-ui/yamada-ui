"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ListRestart as OriginalListRestartIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ListRestartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ListRestartIcon = component(Icon)({
  as: OriginalListRestartIcon,
}) as Component<"svg", IconProps>
