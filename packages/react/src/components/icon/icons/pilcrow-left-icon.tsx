"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PilcrowLeft as OriginalPilcrowLeftIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PilcrowLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PilcrowLeftIcon = component(Icon)({
  as: OriginalPilcrowLeftIcon,
}) as Component<"svg", IconProps>
