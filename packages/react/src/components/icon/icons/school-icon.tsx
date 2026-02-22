"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { School as OriginalSchoolIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SchoolIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SchoolIcon = component(Icon)({
  as: OriginalSchoolIcon,
}) as Component<"svg", IconProps>
