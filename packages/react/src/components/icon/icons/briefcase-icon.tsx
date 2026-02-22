"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Briefcase as OriginalBriefcaseIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BriefcaseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BriefcaseIcon = component(Icon)({
  as: OriginalBriefcaseIcon,
}) as Component<"svg", IconProps>
