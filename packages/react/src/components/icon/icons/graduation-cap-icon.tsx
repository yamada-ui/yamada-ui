"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { GraduationCap as OriginalGraduationCapIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GraduationCapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GraduationCapIcon = component(Icon)({
  as: OriginalGraduationCapIcon,
}) as Component<"svg", IconProps>
