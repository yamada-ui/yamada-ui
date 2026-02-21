"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { BriefcaseMedical as OriginalBriefcaseMedicalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BriefcaseMedicalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BriefcaseMedicalIcon = component(Icon)({
  as: OriginalBriefcaseMedicalIcon,
}) as Component<"svg", IconProps>
