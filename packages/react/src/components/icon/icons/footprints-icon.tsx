"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Footprints as OriginalFootprintsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FootprintsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FootprintsIcon = component(Icon)({
  as: OriginalFootprintsIcon,
}) as Component<"svg", IconProps>
