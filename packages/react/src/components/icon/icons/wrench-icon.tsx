"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Wrench as OriginalWrenchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `WrenchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const WrenchIcon = component(Icon)({
  as: OriginalWrenchIcon,
}) as Component<"svg", IconProps>
