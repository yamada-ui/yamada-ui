"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hospital as OriginalHospitalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HospitalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HospitalIcon = component(Icon)({
  as: OriginalHospitalIcon,
}) as Component<"svg", IconProps>
