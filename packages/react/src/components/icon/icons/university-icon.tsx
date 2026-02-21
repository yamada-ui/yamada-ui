"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { University as OriginalUniversityIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `UniversityIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const UniversityIcon = component(Icon)({
  as: OriginalUniversityIcon,
}) as Component<"svg", IconProps>
