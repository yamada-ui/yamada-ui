"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PilcrowRight as OriginalPilcrowRightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PilcrowRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PilcrowRightIcon = component(Icon)({
  as: OriginalPilcrowRightIcon,
}) as Component<"svg", IconProps>
