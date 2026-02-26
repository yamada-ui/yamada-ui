"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Anvil as OriginalAnvilIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AnvilIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AnvilIcon = component(Icon)({
  as: OriginalAnvilIcon,
}) as Component<"svg", IconProps>
