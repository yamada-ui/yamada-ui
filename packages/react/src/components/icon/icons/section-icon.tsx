"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Section as OriginalSectionIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SectionIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SectionIcon = component(Icon)({
  as: OriginalSectionIcon,
}) as Component<"svg", IconProps>
