"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BriefcasePlus as OriginalBriefcasePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BriefcasePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BriefcasePlusIcon = component(Icon)({
  as: OriginalBriefcasePlusIcon,
}) as Component<"svg", IconProps>
