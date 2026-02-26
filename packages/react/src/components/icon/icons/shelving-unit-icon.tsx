"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { ShelvingUnit as OriginalShelvingUnitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ShelvingUnitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ShelvingUnitIcon = component(Icon)({
  as: OriginalShelvingUnitIcon,
}) as Component<"svg", IconProps>
