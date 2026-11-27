"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { AzerbaijaniManat as OriginalAzerbaijaniManatIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AzerbaijaniManatIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AzerbaijaniManatIcon = component(Icon)({
  as: OriginalAzerbaijaniManatIcon,
}) as Component<"svg", IconProps>
