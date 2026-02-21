"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BriefcaseBusiness as OriginalBriefcaseBusinessIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BriefcaseBusinessIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BriefcaseBusinessIcon = component(Icon)({
  as: OriginalBriefcaseBusinessIcon,
}) as Component<"svg", IconProps>
