"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Grid2x2Check as OriginalGrid2x2CheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Grid2x2CheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Grid2x2CheckIcon = component(Icon)({
  as: OriginalGrid2x2CheckIcon,
}) as Component<"svg", IconProps>
